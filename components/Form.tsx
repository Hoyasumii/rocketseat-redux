import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  RefObject,
  useRef,
} from "react";

type Field = {
  type: HTMLInputTypeAttribute;
  value: FormDataEntryValue;
};

type FormItems<T extends string> = { [value in T]: Field };

type Props<T extends string> = Omit<
  HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  validator?(data: FormItems<T>): boolean;
  onSuccess?(data: FormItems<T>, formRef?: RefObject<HTMLFormElement>): void;
  onFailed?(data: FormItems<T>, formRef?: RefObject<HTMLFormElement>): void;
};

export function Form<T extends string>({
  children,
  validator,
  onSuccess,
  onFailed,
  ...props
}: Props<T>) {
  if (Object.hasOwn(props, "onSubmit"))
    throw new Error(
      "DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS"
    );

  const formRef = useRef<HTMLFormElement>(null);

  const submit = (form: FormData) => {
    const formData: FormItems<T> = {} as FormItems<T>;

    Array.from(form.entries()).forEach((items) => {
      (formData as any)[items[0]] = {
        type: (
          formRef.current?.querySelector(
            `[name="${items[0]}"]`
          ) as HTMLInputElement
        )?.type,
        value: items[1],
      };
    });

    formRef.current?.reset();

    if (onSuccess) {
      onSuccess(formData);
    }

    // if (validator && validator(formData) && onSuccess) {
    //   onSuccess(formData);
    // } else {
    //   if (onFailed) {
    //     onFailed(formData);
    //   }
    // }
  };

  return (
    <form action={submit} ref={formRef} {...props}>
      {children}
    </form>
  );
}
