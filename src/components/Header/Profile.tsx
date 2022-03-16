import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Alves</Text>
          <Text color="gray.300" fontSize="small">
            leonardo.alves@email.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leonardo Alves"
        src="https://github.com/leo-pro.png/"
      />
    </Flex>
  );
}
