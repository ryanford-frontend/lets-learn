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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["circle"](29, 22, 10, {["cy"]: "22",["r"]: "5",["fill"]: "#FF7892",["cx"]: "29",}));el.appendChild(svg["circle"](7, 22, 10, {["cy"]: "22",["r"]: "5",["fill"]: "#FF7892",["cx"]: "7",}));el.appendChild(svg["path"]("M29 14c-.256 0-.512-.098-.707-.293-2.577-2.575-7.055-1.736-7.099-1.726-.548.109-1.067-.247-1.174-.787-.107-.541.242-1.066.783-1.174.227-.046 5.563-1.065 8.903 2.273.391.391.391 1.023 0 1.414-.194.195-.45.293-.706.293zM7 14c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414 3.34-3.341 8.678-2.318 8.903-2.273.542.108.893.635.784 1.177-.108.54-.633.892-1.175.785-.069-.015-4.529-.843-7.098 1.726-.195.194-.451.292-.707.292zm19 5c-.256 0-.512-.098-.707-.293-1.304-1.305-4.09-.974-5.052-.736-.54.132-1.077-.195-1.211-.73-.133-.536.192-1.077.728-1.211.186-.046 4.575-1.111 6.949 1.263.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293zm-16 0c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414 2.373-2.373 6.764-1.309 6.95-1.263.535.134.86.675.727 1.211-.132.536-.673.863-1.21.73-.964-.237-3.749-.567-5.052.736-.196.195-.452.293-.708.293z", {["fill"]: "#664500",["d"]: "M29 14c-.256 0-.512-.098-.707-.293-2.577-2.575-7.055-1.736-7.099-1.726-.548.109-1.067-.247-1.174-.787-.107-.541.242-1.066.783-1.174.227-.046 5.563-1.065 8.903 2.273.391.391.391 1.023 0 1.414-.194.195-.45.293-.706.293zM7 14c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414 3.34-3.341 8.678-2.318 8.903-2.273.542.108.893.635.784 1.177-.108.54-.633.892-1.175.785-.069-.015-4.529-.843-7.098 1.726-.195.194-.451.292-.707.292zm19 5c-.256 0-.512-.098-.707-.293-1.304-1.305-4.09-.974-5.052-.736-.54.132-1.077-.195-1.211-.73-.133-.536.192-1.077.728-1.211.186-.046 4.575-1.111 6.949 1.263.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293zm-16 0c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414 2.373-2.373 6.764-1.309 6.95-1.263.535.134.86.675.727 1.211-.132.536-.673.863-1.21.73-.964-.237-3.749-.567-5.052.736-.196.195-.452.293-.708.293z",}));el.appendChild(svg["path"]("M13 25s1 4 5 4 5-4 5-4-1 1-5 1-5-1-5-1z", {["d"]: "M13 25s1 4 5 4 5-4 5-4-1 1-5 1-5-1-5-1z",["fill"]: "#664500",}));el.appendChild(svg["path"]("M18 29.5c-4.34 0-5.474-4.335-5.485-4.379-.055-.218.043-.445.238-.557.191-.106.43-.079.591.072.039.034 1.066.864 4.656.864 3.644 0 4.647-.855 4.657-.863.165-.146.409-.171.597-.06.188.113.284.331.231.544-.011.044-1.145 4.379-5.485 4.379zm-4.051-3.492C14.526 27.072 15.724 28.5 18 28.5s3.475-1.428 4.051-2.492c-.82.258-2.101.492-4.051.492s-3.231-.234-4.051-.492zM13 25h.01H13z", {["d"]: "M18 29.5c-4.34 0-5.474-4.335-5.485-4.379-.055-.218.043-.445.238-.557.191-.106.43-.079.591.072.039.034 1.066.864 4.656.864 3.644 0 4.647-.855 4.657-.863.165-.146.409-.171.597-.06.188.113.284.331.231.544-.011.044-1.145 4.379-5.485 4.379zm-4.051-3.492C14.526 27.072 15.724 28.5 18 28.5s3.475-1.428 4.051-2.492c-.82.258-2.101.492-4.051.492s-3.231-.234-4.051-.492zM13 25h.01H13z",["fill"]: "#664500",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};