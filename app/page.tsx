import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { AppHome } from "@/components/AppHome/AppHome";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { Button } from "@mantine/core";
import Link from "next/link";

export default async function Home() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const { data: todos } = await supabase.from("todos").select();

	return (
		<>
			<AppHome />
			<ColorSchemeToggle />
			<ul>
				{todos?.map((todo: any, i: number) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</>
	);
}
