import {
  Box,
  Flex,
  Text,
  Button,
  Skeleton,
  Input,
  useBoolean,
  FormControl,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { User } from "hooks";

const ErrorText = ({ children }) => (
  <Text fontSize="12px" color="red" m="0">
    {children}
  </Text>
);

const ErrorBox = ({ name }) => (
  <ErrorMessage name={name} component={ErrorText} />
);

const DisplayNameFormik: React.FC<{
  user: User | null;
  isUpdating: boolean;
  off: () => void;
}> = ({ children, user, isUpdating, off }) => {
  const [dispalyName, setDisplayName] = useState(user?.displayName);
  useEffect(() => {
    setDisplayName(user?.displayName);
  }, [user?.displayName]);

  return (
    <Formik
      initialValues={{ input: dispalyName }}
      validationSchema={Yup.object({
        input: Yup.string().max(15).required("Display name can't be empty"),
      })}
      onSubmit={({ input }) => {
        if (!isUpdating) return;
        off();
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

const DisplayNameInput: React.FC<{
  field: any;
  isUpdating: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
}> = ({ field, isUpdating, inputRef }) => (
  <Input
    {...field}
    id="input"
    w="80%"
    p="0.5"
    textOverflow="ellipsis"
    whiteSpace="nowrap"
    overflow="hidden"
    spellCheck="false"
    variant="unstyled"
    autoComplete="off"
    isReadOnly={!isUpdating}
    ref={inputRef}
  />
);

const DiplayNameFormContainer: React.FC = ({ children }) => (
  <Flex
    mt="2"
    justify="space-between"
    w="full"
    p="1"
    pl="4"
    bgColor="#EDEDED"
    textColor="#595959"
    rounded="md"
  >
    {children}
  </Flex>
);

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

const DisplayNameBoxForm = ({ user }: { user: User | null }) => {
  const [isUpdating, { on, off }] = useBoolean(false);
  const inputRef = useRef<HTMLInputElement>();

  return (
    <>
      <DiplayNameFormContainer>
        <DisplayNameFormik isUpdating={isUpdating} user={user} off={off}>
          <Field name="input">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <DisplayNameInput
                  field={field}
                  isUpdating={isUpdating}
                  inputRef={inputRef}
                />
              </FormControl>
            )}
          </Field>
          <ErrorBox name="input" />
        </DisplayNameFormik>
        <DisplayNameUpdateButton
          isUpdating={isUpdating}
          inputRef={inputRef}
          on={on}
        />
      </DiplayNameFormContainer>
    </>
  );
};

const DisplayNameBox = ({ user }: { user: User | null }) => {
  const Container = user ? Box : Skeleton;

  return (
    <Box mt="25px" w="full">
      <Text fontSize="20px" color="#0496FF" fontFamily="ubuntu">
        Display name
      </Text>
      <Container w="70%" rounded="md">
        <DisplayNameBoxForm user={user} />
      </Container>
    </Box>
  );
};

export { DisplayNameBox as default };
