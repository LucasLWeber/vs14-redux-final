import { RemoveButtonProps } from "../../../utils/interfaces";

export function RemoveButton({clearFunction} : RemoveButtonProps){
	return(
		<button className="bg-red-500 hover:bg-red-600 p-3 rounded shadow text-white" onClick={clearFunction}>
			<img src="/assets/Delete.svg" alt="Remover produto" />
		</button>
	);
}