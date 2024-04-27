import { Box, Flex, Text, Button, Image, Heading, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwSmFuJTIwRG9uJUMzJUExfGVufDB8fHx8MTcxNDIyNjE1Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Jan Doná" mb={4} />
        <Heading as="h2" size="xl" fontWeight="bold" color="primary.800">
          Jan Doná
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Web Designer & Developer
        </Text>
      </Box>

      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          About Me
        </Text>
        <Text fontSize="md" color="gray.700">
          I am Jan Doná, a passionate web designer and developer with over 5 years of experience in creating beautiful and functional websites. I specialize in modern, user-friendly designs that engage and convert visitors into customers.
        </Text>
      </Box>

      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          My Work
        </Text>
        <Flex justify="space-around" wrap="wrap">
          <Image src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MHx8fHwxNzE0MjI2MTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" m={2} alt="Web Design Portfolio" />
          <Image src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwd2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNDIyNjE1Mnww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" m={2} alt="Responsive Web Design" />
          <Image src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE3MTQyMjYxNTN8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" m={2} alt="Creative Web Design" />
        </Flex>
      </Box>

      <Box my={10}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Contact Me
        </Text>
        <Flex justify="center" mt={4}>
          <Link href="mailto:jan.dona@example.com" isExternal>
            <Button variant="ghost" colorScheme="teal" leftIcon={<FaEnvelope />}>
              Email
            </Button>
          </Link>
          <Link href="https://github.com/jandoná" isExternal>
            <Button variant="ghost" colorScheme="teal" leftIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/jandoná" isExternal>
            <Button variant="ghost" colorScheme="teal" leftIcon={<FaLinkedin />}>
              LinkedIn
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
