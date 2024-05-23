import { cn } from "./lib/utils";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Midi } from "@tonejs/midi";
import { Textarea } from "./components/ui/textarea";
import { useState, useRef } from "react";

function UploadMidi() {
	const [result, setResult] = useState([]);
	const fileInputRef = useRef(null);

	const handleUpload = async (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		const resultBuff = [];
		reader.onload = async (e) => {
			const midi = new Midi(e.target.result);

			// find the first midi.tracks that has name containing "Piano"
			const track = midi.tracks.find((track) => track.name.includes("Piano"));
			const notes = track.notes;
			// print the notes name
			for (const note of notes) {
				const duration = note.duration;
				const name = note.name;

				// add the note to the array
				resultBuff.push([name, duration]);
			}
			let stringResult = JSON.stringify(resultBuff)
				.replaceAll("[", "{")
				.replaceAll("]", "}");

			stringResult = `Note notes[] = ${stringResult};`;

			setResult(stringResult);
		};
		reader.readAsArrayBuffer(file);
	};

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	return (
		<div className={cn("flex flex-col py-4 items-center gap-4 min-h-screen")}>
			<input
				type="file"
				accept=".mid"
				onChange={handleUpload}
				ref={fileInputRef}
				className="hidden"
			/>
			<Button
				onClick={handleButtonClick}
				className={cn(" w-48 h-32 bg-blue-500 text-white rounded-md")}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="m-4"
				>
					<title>Upload MIDI</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
					/>
				</svg>
			</Button>
			<Textarea
				className="w-3/5 h-[600px]"
				type="text"
				value={result}
				readOnly
			/>
		</div>
	);
}

export default UploadMidi;
