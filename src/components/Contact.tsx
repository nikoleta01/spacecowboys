import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./common/Button";
import Input from "./common/Input";
import ErrorParagraph from "./common/ErrorParagraph";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Heading from "./common/Heading";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 3 characters"),
  lastName: z.string().min(2, "Last name must be at least 3 characters"),
  email: z.string().email("Sorry, that's no valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const isValidField = (field: keyof ContactFormData) =>
    touchedFields[field] &&
    !errors[field] &&
    watchedFields[field]?.trim() !== "";

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="bg-background-light">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Heading text="SAY HELLO" />
        <p className="text-center text-black my-8 font-merriweather">
          Got some questions about us? Wanna do business with us?
          <br />
          Or do you just want to send us your latest cat-content - there you go:
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div>
                <Input
                  {...register("firstName")}
                  type="text"
                  className={`${
                    isValidField("firstName")
                      ? "text-green-500"
                      : "text-gray-800"
                  }`}
                  placeholder="First Name"
                  rightIcon={
                    isValidField("firstName") && (
                      <IoIosCheckmarkCircleOutline size={20} />
                    )
                  }
                />
                {errors.firstName && (
                  <ErrorParagraph message={errors.firstName.message!} />
                )}
              </div>

              <div>
                <Input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className={`${
                    isValidField("lastName")
                      ? "text-green-500"
                      : "text-gray-800"
                  }`}
                  rightIcon={
                    isValidField("lastName") && (
                      <IoIosCheckmarkCircleOutline size={20} />
                    )
                  }
                />
                {errors.lastName && (
                  <ErrorParagraph message={errors.lastName.message!} />
                )}
              </div>

              <div>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="E-Mail"
                  className={`${
                    isValidField("email") ? "text-green-500" : "text-gray-800"
                  }`}
                  rightIcon={
                    isValidField("email") && (
                      <IoIosCheckmarkCircleOutline size={20} />
                    )
                  }
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows={8}
                className="w-full p-4 rounded-sm bg-white shadow-inner border-0 focus:ring-2 focus:ring-grey-800 focus:outline-none resize-none placeholder:text-gray-400"
              ></textarea>
              {errors.message && (
                <ErrorParagraph message={errors.message.message!} />
              )}
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center mt-6">
            <Button type="submit" title="SEND THAT MAIL" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
