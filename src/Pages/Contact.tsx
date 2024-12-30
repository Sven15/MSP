import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

// Define Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    // Here you can handle the submission, e.g., send data to an API
  };
  return (
    <Box sx={{ paddingTop: 3, height: "100%" }}>
      <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <TextField
              label="Your Name"
              fullWidth
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Your Email"
              type="email"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Your Number"
              type="tel"
              fullWidth
              {...register("number")}
              error={!!errors.number}
              helperText={errors.number?.message}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Subject"
              fullWidth
              {...register("subject")}
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
          </Box>

          <Box mb={2}>
            <TextField
              label="Your Message"
              multiline
              rows={4}
              fullWidth
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
