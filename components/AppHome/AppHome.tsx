import { Anchor, Text, Title } from "@mantine/core";

export function AppHome() {
	return (
		<>
			<Title ta="center" mt={100}>
				Welcome to{" "}
				<Text
					inherit
					variant="gradient"
					component="span"
					gradient={{ from: "pink", to: "yellow" }}
				>
					Mantine
				</Text>
			</Title>
		</>
	);
}
