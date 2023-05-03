import Button from "@/component/Button";
import { useToast } from "@/component/Toast/UseToast";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="secondary"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        });
      }}
      icon={undefined}
    >
      Show Toast
    </Button>
  );
}
