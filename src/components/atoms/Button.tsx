interface ButtonProps{
	text: string;
	type: "submit" | "reset" | "button";
}

export function Button({ text, type }: ButtonProps){
	return(
		<button
			type={type}
		>
			{text}
		</button>
	);
}