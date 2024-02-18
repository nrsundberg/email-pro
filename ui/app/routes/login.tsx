import { Button } from "@nextui-org/react";
import Header from "~/components/Header";
import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { AccountInput } from "~/components/wrappers/Inputs";
import Stack from "~/components/wrappers/Stack";
import { Form, Link, useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/router";

export const meta: MetaFunction = () => {
  return [
    { title: "Login - Email Pro" },
    { name: "description", content: "Login to Email Pro account" }
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {};

  if (!email.includes("@")) {
    // @ts-expect-error does-not-exist
    errors.email = "Invalid email address";
  }

  if (password.length < 12) {
    // @ts-expect-error does-not-exist
    errors.password = "Password should be at least 12 characters";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Redirect to dashboard if validation is successful
  return redirect("/home");
}

export default function RouteComponent() {
  const actionData = useActionData<typeof action>();
  return (
    <>
      <Header disableAccountButtons={true} />

      <div className="w-100 h-lvh dark grid grid-cols-2 gap-4">
        <div className="text-center self-center">
          <h2>Thank you for joining us!</h2>
        </div>
        <div className="self-center">
          <Form method="post">
            <Stack>
              <AccountInput
                formName="email"
                isInvalid={actionData?.errors?.email && true}
                errorMessage={
                  actionData?.errors?.email && actionData?.errors.email
                }
              />
              <AccountInput
                isProtected
                formName="password"
                isInvalid={actionData?.errors?.password && true}
                errorMessage={
                  actionData?.errors?.password && actionData?.errors.password
                }
              />
            </Stack>
            <Button type="submit" color="primary">
              Login
            </Button>
          </Form>
          <p>
            Not a member?{" "}
            {
              <Link to="/create" prefetch="intent">
                <span className="text-purple-600">Sign up</span>
              </Link>
            }{" "}
            now
          </p>
        </div>
      </div>
    </>
  );
}
