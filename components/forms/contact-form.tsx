"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";
import { SocialLinks } from "@/config/socials";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // Fallback: open a pre-filled mailto link when the form backend isn't configured.
  function openMailtoFallback(values: z.infer<typeof formSchema>) {
    const emailLink = SocialLinks.find((s) => s.name === "Email")?.link;
    if (!emailLink) return;
    const subject = encodeURIComponent(
      `Portfolio contact from ${values.name}`
    );
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name} (${values.email})${
        values.social ? `\n${values.social}` : ""
      }`
    );
    window.location.href = `${emailLink}?subject=${subject}&body=${body}`;
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      form.reset();

      if (response.status === 200) {
        storeModal.onOpen({
          title: "Thankyou!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      } else {
        // Contact backend isn't configured — fall back to opening an email draft.
        openMailtoFallback(values);
        storeModal.onOpen({
          title: "Opening your email client",
          description:
            "The contact form isn't fully set up yet, so I've opened an email draft with your message instead.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      form.reset();
      openMailtoFallback(values);
      storeModal.onOpen({
        title: "Opening your email client",
        description:
          "Something went wrong submitting the form, so I've opened an email draft with your message instead.",
        icon: Icons.successAnimated,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
