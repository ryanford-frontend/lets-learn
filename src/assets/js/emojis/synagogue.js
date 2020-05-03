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
				el.appendChild(svg["path"]("M26 9l-8-8-8 8v27h16z", {["fill"]: "#A7A9AC",["d"]: "M26 9l-8-8-8 8v27h16z",}));el.appendChild(svg["path"]("M26 10c-.256 0-.512-.098-.707-.293L18 2.414l-7.293 7.293c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l8-8c.391-.391 1.023-.391 1.414 0l8 8c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z", {["fill"]: "#292F33",["d"]: "M26 10c-.256 0-.512-.098-.707-.293L18 2.414l-7.293 7.293c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l8-8c.391-.391 1.023-.391 1.414 0l8 8c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z",}));el.appendChild(svg["path"]("M11 36H4c-1.104 0-2-.896-2-2V20c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v16z", {["fill"]: "#D1D3D4",["d"]: "M11 36H4c-1.104 0-2-.896-2-2V20c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v16z",}));el.appendChild(svg["path"]("M12 19.785c.171-.662.005-1.395-.514-1.914L7.95 14.336c-.781-.781-2.047-.781-2.828 0l-3.536 3.536c-.52.519-.686 1.251-.514 1.914H12z", {["fill"]: "#67757F",["d"]: "M12 19.785c.171-.662.005-1.395-.514-1.914L7.95 14.336c-.781-.781-2.047-.781-2.828 0l-3.536 3.536c-.52.519-.686 1.251-.514 1.914H12z",}));el.appendChild(svg["path"]("M2 20h9v1H2zm23 16h7c1.104 0 2-.896 2-2V20c0-1.104-.896-2-2-2h-5c-1.104 0-2 .896-2 2v16z", {["fill"]: "#D1D3D4",["d"]: "M2 20h9v1H2zm23 16h7c1.104 0 2-.896 2-2V20c0-1.104-.896-2-2-2h-5c-1.104 0-2 .896-2 2v16z",}));el.appendChild(svg["path"]("M34.936 19.785c.171-.662.005-1.395-.515-1.914l-3.536-3.536c-.78-.781-2.047-.781-2.828 0l-3.535 3.536c-.519.519-.686 1.251-.514 1.914h10.928z", {["fill"]: "#67757F",["d"]: "M34.936 19.785c.171-.662.005-1.395-.515-1.914l-3.536-3.536c-.78-.781-2.047-.781-2.828 0l-3.535 3.536c-.519.519-.686 1.251-.514 1.914h10.928z",}));el.appendChild(svg["path"]("M25 20h9v1h-9z", {["fill"]: "#D1D3D4",["d"]: "M25 20h9v1h-9z",}));el.appendChild(svg["path"]("M12 19.785c0 .553-.448 1-1 1H2c-.552 0-1-.447-1-1 0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm23 0c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.552.447-1 1-1h9c.553 0 1 .448 1 1z", {["fill"]: "#292F33",["d"]: "M12 19.785c0 .553-.448 1-1 1H2c-.552 0-1-.447-1-1 0-.552.448-1 1-1h9c.552 0 1 .448 1 1zm23 0c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.552.447-1 1-1h9c.553 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M17.799 20c-.693 0-1.33-.388-1.703-1.038l-.672-1.173h-1.581c-.714 0-1.34-.346-1.676-.926-.345-.597-.326-1.344.05-1.999l.765-1.335-.766-1.336c-.377-.657-.395-1.404-.049-2 .336-.579.962-.924 1.675-.924h1.581l.671-1.172c.375-.651 1.011-1.039 1.704-1.039.67 0 1.295.368 1.674.984l.757 1.227h1.855c.726 0 1.356.353 1.685.945.337.603.3 1.354-.102 2.006l-.809 1.31.808 1.309c.401.651.439 1.401.102 2.007-.329.591-.958.944-1.684.944H20.23l-.76 1.23c-.375.613-1.001.98-1.671.98z", {["fill"]: "#67757F",["d"]: "M17.799 20c-.693 0-1.33-.388-1.703-1.038l-.672-1.173h-1.581c-.714 0-1.34-.346-1.676-.926-.345-.597-.326-1.344.05-1.999l.765-1.335-.766-1.336c-.377-.657-.395-1.404-.049-2 .336-.579.962-.924 1.675-.924h1.581l.671-1.172c.375-.651 1.011-1.039 1.704-1.039.67 0 1.295.368 1.674.984l.757 1.227h1.855c.726 0 1.356.353 1.685.945.337.603.3 1.354-.102 2.006l-.809 1.31.808 1.309c.401.651.439 1.401.102 2.007-.329.591-.958.944-1.684.944H20.23l-.76 1.23c-.375.613-1.001.98-1.671.98z",}));el.appendChild(svg["path"]("M17.799 19c-.336 0-.64-.195-.836-.536l-3.878-6.768c-.2-.348-.219-.714-.052-1 .157-.271.453-.427.811-.427h8.242c.363 0 .658.157.811.431.161.288.133.651-.079.996l-4.196 6.799c-.199.32-.499.505-.823.505zm-3.812-7.735l3.814 6.658 4.108-6.656-7.922-.002z", {["fill"]: "#FFCC4D",["d"]: "M17.799 19c-.336 0-.64-.195-.836-.536l-3.878-6.768c-.2-.348-.219-.714-.052-1 .157-.271.453-.427.811-.427h8.242c.363 0 .658.157.811.431.161.288.133.651-.079.996l-4.196 6.799c-.199.32-.499.505-.823.505zm-3.812-7.735l3.814 6.658 4.108-6.656-7.922-.002z",}));el.appendChild(svg["path"]("M22.086 16.789h-8.242c-.358 0-.653-.155-.811-.427-.167-.288-.148-.652.052-1l3.878-6.769c.196-.34.5-.536.836-.536.323 0 .624.185.822.507l4.196 6.798c.212.344.24.706.079.995-.152.275-.447.432-.81.432zm-8.098-.998l7.922.002-4.108-6.658-3.814 6.656z", {["fill"]: "#FFCC4D",["d"]: "M22.086 16.789h-8.242c-.358 0-.653-.155-.811-.427-.167-.288-.148-.652.052-1l3.878-6.769c.196-.34.5-.536.836-.536.323 0 .624.185.822.507l4.196 6.798c.212.344.24.706.079.995-.152.275-.447.432-.81.432zm-8.098-.998l7.922.002-4.108-6.658-3.814 6.656z",}));el.appendChild(svg["path"]("M15 27.531h6V34h-6z", {["fill"]: "#67757F",["d"]: "M15 27.531h6V34h-6z",}));el.appendChild(svg["ellipse"](18, 27.5, 6, 5, {["rx"]: "3",["cy"]: "27.5",["ry"]: "2.5",["fill"]: "#67757F",["cx"]: "18",}));el.appendChild(svg["path"]("M10 34h16v2H10z", {["fill"]: "#D1D3D4",["d"]: "M10 34h16v2H10z",}));el.appendChild(svg["path"]("M8 28.785c0 .828-.671-1-1.5-1s-1.5 1.828-1.5 1v-4.5c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5zm23 0c0 .828-.672-1-1.5-1s-1.5 1.828-1.5 1v-4.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5z", {["fill"]: "#67757F",["d"]: "M8 28.785c0 .828-.671-1-1.5-1s-1.5 1.828-1.5 1v-4.5c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5zm23 0c0 .828-.672-1-1.5-1s-1.5 1.828-1.5 1v-4.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v4.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};