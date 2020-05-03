import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M27 27H10v9h21v-5c0-2.209-1.791-4-4-4z", {["fill"]: "#FA743E",["d"]: "M27 27H10v9h21v-5c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z", {["fill"]: "#FFAC33",["d"]: "M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z",}));el.appendChild(svg["path"]("M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z", {["fill"]: "#FFDC5D",["d"]: "M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z",}));el.appendChild(svg["path"]("M12.737 5.97h2.75v3.89h-2.75z", {["fill"]: "#FFAC33",["d"]: "M12.737 5.97h2.75v3.89h-2.75z",}));el.appendChild(svg["path"]("M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));el.appendChild(svg["path"]("M18.734 18.386l1.827.691s-6.529 13.746-7.413 15.022c-.884 1.276-1.87 2.055-4.57 1.76l10.156-17.473zM26 32h1v4h-1z", {["fill"]: "#DD551F",["d"]: "M18.734 18.386l1.827.691s-6.529 13.746-7.413 15.022c-.884 1.276-1.87 2.055-4.57 1.76l10.156-17.473zM26 32h1v4h-1z",}));el.appendChild(svg["path"]("M14.984 28.391s-2.359 4.422-2.865 5.335c-.276.497-1.305 2.009-2.322 2.009 0 0 2.214.122 3.122-1.682 1.285-2.552 1.956-3.787 2.425-4.646 0 0-.125-.328-.203-.484-.118-.235-.157-.532-.157-.532z", {["fill"]: "#DD551F",["d"]: "M14.984 28.391s-2.359 4.422-2.865 5.335c-.276.497-1.305 2.009-2.322 2.009 0 0 2.214.122 3.122-1.682 1.285-2.552 1.956-3.787 2.425-4.646 0 0-.125-.328-.203-.484-.118-.235-.157-.532-.157-.532z",}));el.appendChild(svg["path"]("M24.157 16.371c-.026-.058-.596-1.288-1.747-1.529l-.49 1.395c.037-.001.063-.009.101-.009 1.162 0 1.76.422 1.774.432.042.032.093.047.143.047.053 0 .106-.018.149-.052.085-.067.114-.184.07-.284z", {["fill"]: "#662113",["d"]: "M24.157 16.371c-.026-.058-.596-1.288-1.747-1.529l-.49 1.395c.037-.001.063-.009.101-.009 1.162 0 1.76.422 1.774.432.042.032.093.047.143.047.053 0 .106-.018.149-.052.085-.067.114-.184.07-.284z",}));el.appendChild(svg["path"]("M22.646 8.125l-3.774-1.324c-1.042-.366-2.184.183-2.549 1.225l-.756 2.155-.284-1.14c-.172-.687-.825-1.486-1.77-1.195-.677.208-.891 1.127-.719 1.815l1.226 4.929-.345.984.613 1.275 5.662 1.986c.944.331 1.275-.613 1.275-.613l.696-1.985.49-1.395 1.462-4.168c.364-1.042-.185-2.183-1.227-2.549z", {["fill"]: "#EF9645",["d"]: "M22.646 8.125l-3.774-1.324c-1.042-.366-2.184.183-2.549 1.225l-.756 2.155-.284-1.14c-.172-.687-.825-1.486-1.77-1.195-.677.208-.891 1.127-.719 1.815l1.226 4.929-.345.984.613 1.275 5.662 1.986c.944.331 1.275-.613 1.275-.613l.696-1.985.49-1.395 1.462-4.168c.364-1.042-.185-2.183-1.227-2.549z",}));el.appendChild(svg["path"]("M22.021 14.792c-1.417 0-2.107 1.515-2.136 1.58-.044.099-.016.215.069.283.084.068.204.07.292.007.005-.004.578-.397 1.673-.423l.49-1.395c-.124-.027-.25-.052-.388-.052z", {["fill"]: "#4F140B",["d"]: "M22.021 14.792c-1.417 0-2.107 1.515-2.136 1.58-.044.099-.016.215.069.283.084.068.204.07.292.007.005-.004.578-.397 1.673-.423l.49-1.395c-.124-.027-.25-.052-.388-.052z",}));el.appendChild(svg["path"]("M12.513 7.657c.687-.171 1.383.248 1.555.934l.284 1.14.756-2.155c.366-1.042 1.507-1.591 2.549-1.225l3.774 1.324c1.042.366 1.591 1.507 1.225 2.549l-2.648 7.549s-.331.944-1.275.613L13.072 16.4l-.613-1.275.345-.984-1.226-4.929c-.171-.688.248-1.385.935-1.555z", {["fill"]: "#FFDC5D",["d"]: "M12.513 7.657c.687-.171 1.383.248 1.555.934l.284 1.14.756-2.155c.366-1.042 1.507-1.591 2.549-1.225l3.774 1.324c1.042.366 1.591 1.507 1.225 2.549l-2.648 7.549s-.331.944-1.275.613L13.072 16.4l-.613-1.275.345-.984-1.226-4.929c-.171-.688.248-1.385.935-1.555z",}));el.appendChild(svg["path"]("M18.743 12.054l1.655-4.718.944.331-1.655 4.718zm-2.83-.993l1.656-4.718.943.331-1.655 4.718z", {["fill"]: "#EF9645",["d"]: "M18.743 12.054l1.655-4.718.944.331-1.655 4.718zm-2.83-.993l1.656-4.718.943.331-1.655 4.718z",}));el.appendChild(svg["path"]("M20.995 23.364s-.56-1.117-1.678-1.681c-.246.514-.516 1.078-.807 1.681h2.485z", {["fill"]: "#C1694F",["d"]: "M20.995 23.364s-.56-1.117-1.678-1.681c-.246.514-.516 1.078-.807 1.681h2.485z",}));el.appendChild(svg["path"]("M18.734 18.386l-1.9 3.234-1.024 1.744-1.16 1.974L15 28c0 .594.178 1.144.476 1.61.98-1.986 2.097-4.295 3.035-6.246l.807-1.681c.741-1.547 1.244-2.606 1.244-2.606l-1.828-.691z", {["fill"]: "#EF9645",["d"]: "M18.734 18.386l-1.9 3.234-1.024 1.744-1.16 1.974L15 28c0 .594.178 1.144.476 1.61.98-1.986 2.097-4.295 3.035-6.246l.807-1.681c.741-1.547 1.244-2.606 1.244-2.606l-1.828-.691z",}));el.appendChild(svg["path"]("M19.317 21.683c-.377-.191-.818-.319-1.322-.319-.438 0-.819.107-1.161.256l-1.024 1.744h2.701l.806-1.681z", {["fill"]: "#662113",["d"]: "M19.317 21.683c-.377-.191-.818-.319-1.322-.319-.438 0-.819.107-1.161.256l-1.024 1.744h2.701l.806-1.681z",}));el.appendChild(svg["path"]("M14.278 29.85s-1.719 3.579-2.107 4.416C11.484 35.75 10 36 10 36c-8 0-3.622-8.343-3.622-8.343l6.432-11.846 6.541 2.58-5.073 11.459z", {["fill"]: "#FA743E",["d"]: "M14.278 29.85s-1.719 3.579-2.107 4.416C11.484 35.75 10 36 10 36c-8 0-3.622-8.343-3.622-8.343l6.432-11.846 6.541 2.58-5.073 11.459z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};