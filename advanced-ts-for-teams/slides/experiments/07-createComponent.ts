export const createComponent = <TComponent extends Record<string, string>>(
  component: TComponent,
) => {
  return (variant: keyof TComponent) => {
    return component[variant];
  };
};

const getButtonClasses = createComponent({
  primary: "bg-blue-300",
  secondary: "bg-green-300",
});

const classes = getButtonClasses("primary");
