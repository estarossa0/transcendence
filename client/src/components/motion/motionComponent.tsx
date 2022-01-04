import {
  Button,
  ButtonProps,
  Box,
  BoxProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

export const MotionBox = motion<Omit<BoxProps, "transition">>(Box);
export const MotionText = motion<Omit<TextProps, "transition">>(Text);
export const MotionButton = motion<Omit<ButtonProps, "transition">>(Button);
export const MotionStack = motion<Omit<StackProps, "transition">>(Stack);
