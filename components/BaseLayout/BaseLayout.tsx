"use client";
import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure, useId } from "@mantine/hooks";
import classes from "./styles.module.css";

export function BaseLayout({
	children,
}: {
	children?: React.ReactNode;
}) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<span className="font-bold">Invoice</span>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar py="md" px={4}>
				<UnstyledButton>
					<span className={classes.control}>Invoices</span>
				</UnstyledButton>
				<UnstyledButton>
					<span className={classes.control}>Estimates</span>
				</UnstyledButton>
				<UnstyledButton>
					<span className={classes.control}>Hours</span>
				</UnstyledButton>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
