import { Button } from "@chakra-ui/react";

const DisplayNameUpdateButton: React.FC<{
  isUpdating: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
  on: () => void;
}> = ({ isUpdating, inputRef, on }) => (
  <Button
    onClick={() => {
      on();
      if (inputRef.current) {
        inputRef.current.selectionStart = inputRef.current?.value.length;
        inputRef.current.selectionEnd = inputRef.current?.value.length;
      }
      inputRef.current?.focus();
    }}
    size="sm"
    textColor={isUpdating ? "#0496FF" : "#FF0062"}
    _active={{}}
  >
    {isUpdating ? "Updating" : "Update"}
  </Button>
);

export { DisplayNameUpdateButton as default };
