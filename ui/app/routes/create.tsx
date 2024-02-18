import { Button } from "@nextui-org/react";
import Header from "~/components/Header";
import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import Stack from "~/components/wrappers/Stack";
import { Form, useActionData } from "@remix-run/react";
import { AccountInput } from "~/components/wrappers/Inputs";
import { redirect } from "@remix-run/router";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Account - Email Pro" },
    { name: "description", content: "Create Email Pro account" }
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const rePassword = String(formData.get("reenterPassword"));

  const errors = {};

  if (!email.includes("@")) {
    // @ts-expect-error does-not-exist
    errors.email = "Invalid email address";
  }

  if (password.length < 12) {
    // @ts-expect-error does-not-exist
    errors.password = "Password should be at least 12 characters";
  }

  if (password !== rePassword) {
    // @ts-expect-error does-not-exist
    errors.rePassword = "Password and Reenter Password should match";
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
          <h2>Create Account Form</h2>
        </div>
        <div className="self-center">
          <Form method="post">
            <Stack>
              <AccountInput formName={"firstName"} />
              <AccountInput formName={"lastName"} />
            </Stack>

            <AccountInput
              formName="email"
              isInvalid={actionData?.errors?.email && true}
              errorMessage={
                actionData?.errors?.email && actionData?.errors.email
              }
            />

            <Stack>
              <AccountInput
                isProtected
                formName="password"
                isInvalid={actionData?.errors?.password && true}
                errorMessage={
                  actionData?.errors?.password && actionData?.errors.password
                }
              />
              <AccountInput
                isProtected
                formName="reenterPassword"
                isInvalid={actionData?.errors?.rePassword && true}
                errorMessage={
                  actionData?.errors?.rePassword &&
                  actionData?.errors.rePassword
                }
              />
            </Stack>
            <Button type="submit" color="primary">
              Create Account
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
