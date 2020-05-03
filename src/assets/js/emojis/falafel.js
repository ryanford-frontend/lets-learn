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
				el.appendChild(svg["ellipse"](10.757, 8.247, 16.064, 13.768, {["rx"]: "8.032",["cy"]: "8.247",["ry"]: "6.884",["fill"]: "#C15829",["cx"]: "10.757",}));el.appendChild(svg["path"]("M15.347 13.984c0-.972.144-1.874.395-2.71-1.43-.467-2.983-.732-4.626-.732-2.628 0-5.057.628-7.053 1.785 1.438 1.83 3.898 2.805 6.694 2.805 1.714 0 3.291-.378 4.593-1.084 0-.022-.003-.042-.003-.064z", {["fill"]: "#933813",["d"]: "M15.347 13.984c0-.972.144-1.874.395-2.71-1.43-.467-2.983-.732-4.626-.732-2.628 0-5.057.628-7.053 1.785 1.438 1.83 3.898 2.805 6.694 2.805 1.714 0 3.291-.378 4.593-1.084 0-.022-.003-.042-.003-.064z",}));el.appendChild(svg["path"]("M13.052 13.984c0 .308.02.606.046.901 3.294-.721 5.691-3.017 5.691-6.638 0-.889-.15-1.695-.417-2.42-3.172 1.423-5.32 4.271-5.32 8.157z", {["fill"]: "#933813",["d"]: "M13.052 13.984c0 .308.02.606.046.901 3.294-.721 5.691-3.017 5.691-6.638 0-.889-.15-1.695-.417-2.42-3.172 1.423-5.32 4.271-5.32 8.157z",}));el.appendChild(svg["ellipse"](25.673, 13.984, 20.654, 18.358, {["rx"]: "10.327",["cy"]: "13.984",["ry"]: "9.179",["fill"]: "#C15829",["cx"]: "25.673",}));el.appendChild(svg["path"]("M25.673 22.59c0-6.029-4.354-9.953-10.088-10.745-.153.673-.239 1.385-.239 2.139 0 5.693 4.608 9.166 10.297 9.178.01-.191.03-.377.03-.572z", {["fill"]: "#933813",["d"]: "M25.673 22.59c0-6.029-4.354-9.953-10.088-10.745-.153.673-.239 1.385-.239 2.139 0 5.693 4.608 9.166 10.297 9.178.01-.191.03-.377.03-.572z",}));el.appendChild(svg["ellipse"](12.263, 23.737, 24.526, 21.8, {["rx"]: "12.263",["cy"]: "23.737",["ry"]: "10.9",["fill"]: "#C15829",["cx"]: "12.263",}));el.appendChild(svg["path"]("M34.709 13.984c0-4.621-3.471-7.566-7.946-7.977-.107.032-.216.059-.321.101-2.761 1.102-3.698 5.254-2.094 9.275 1.274 3.192 3.767 5.334 6.123 5.533 2.543-1.302 4.238-3.707 4.238-6.932z", {["fill"]: "#A0AD55",["d"]: "M34.709 13.984c0-4.621-3.471-7.566-7.946-7.977-.107.032-.216.059-.321.101-2.761 1.102-3.698 5.254-2.094 9.275 1.274 3.192 3.767 5.334 6.123 5.533 2.543-1.302 4.238-3.707 4.238-6.932z",}));el.appendChild(svg["path"]("M26.442 6.108c-2.761 1.102-3.698 5.254-2.094 9.275 1.274 3.192 3.767 5.334 6.123 5.533-5.945-10.374-3.924-14.85-4.029-14.808z", {["fill"]: "#C4CE89",["d"]: "M26.442 6.108c-2.761 1.102-3.698 5.254-2.094 9.275 1.274 3.192 3.767 5.334 6.123 5.533-5.945-10.374-3.924-14.85-4.029-14.808z",}));el.appendChild(svg["circle"](3.873, 19.721, 2.294, {["cy"]: "19.721",["r"]: "1.147",["fill"]: "#FFAC33",["cx"]: "3.873",}));el.appendChild(svg["circle"](5.594, 16.853, 1.148, {["cy"]: "16.853",["r"]: ".574",["fill"]: "#77B255",["cx"]: "5.594",}));el.appendChild(svg["circle"](8.462, 18.574, 2.294, {["cy"]: "18.574",["r"]: "1.147",["fill"]: "#77B255",["cx"]: "8.462",}));el.appendChild(svg["circle"](10.757, 15.131, 2.294, {["cy"]: "15.131",["r"]: "1.147",["fill"]: "#FFAC33",["cx"]: "10.757",}));el.appendChild(svg["circle"](5.594, 5.378, 1.148, {["cy"]: "5.378",["r"]: ".574",["fill"]: "#FFAC33",["cx"]: "5.594",}));el.appendChild(svg["circle"](7.315, 3.657, 2.294, {["cy"]: "3.657",["r"]: "1.147",["fill"]: "#77B255",["cx"]: "7.315",}));el.appendChild(svg["circle"](10.183, 3.084, 1.148, {["cy"]: "3.084",["r"]: ".574",["fill"]: "#FFAC33",["cx"]: "10.183",}));el.appendChild(svg["circle"](20.51, 7.673, 1.148, {["cy"]: "7.673",["r"]: ".574",["fill"]: "#77B255",["cx"]: "20.51",}));el.appendChild(svg["circle"](18.789, 9.394, 2.294, {["cy"]: "9.394",["r"]: "1.147",["fill"]: "#FFAC33",["cx"]: "18.789",}));el.appendChild(svg["circle"](29, 10, 2, {["cy"]: "10",["r"]: "1",["fill"]: "#A6D388",["cx"]: "29",}));el.appendChild(svg["circle"](33, 14, 2, {["cy"]: "14",["r"]: "1",["fill"]: "#A6D388",["cx"]: "33",}));el.appendChild(svg["circle"](4, 27, 2, {["cy"]: "27",["r"]: "1",["fill"]: "#77B255",["cx"]: "4",}));el.appendChild(svg["circle"](10, 30, 2, {["cy"]: "30",["r"]: "1",["fill"]: "#77B255",["cx"]: "10",}));el.appendChild(svg["circle"](19, 25, 2, {["cy"]: "25",["r"]: "1",["fill"]: "#77B255",["cx"]: "19",}));el.appendChild(svg["circle"](22, 13, 2, {["cy"]: "13",["r"]: "1",["fill"]: "#77B255",["cx"]: "22",}));el.appendChild(svg["circle"](15, 5, 2, {["cy"]: "5",["r"]: "1",["fill"]: "#77B255",["cx"]: "15",}));el.appendChild(svg["circle"](8, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#77B255",["cx"]: "8",}));el.appendChild(svg["circle"](14, 22, 2, {["cy"]: "22",["r"]: "1",["fill"]: "#FFAC33",["cx"]: "14",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};