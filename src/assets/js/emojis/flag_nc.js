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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#009543",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#ED4135",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#0035AD",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["ellipse"](13, 18, 18.804, 18.804, {["rx"]: "9.402",["fill"]: "#141414",["cy"]: "18",["ry"]: "9.402",["cx"]: "13",["transform"]: "rotate(-76.714 13.001 18.001)",}));el.appendChild(svg["circle"](13, 18, 18, {["cy"]: "18",["r"]: "9",["fill"]: "#FAE600",["cx"]: "13",}));el.appendChild(svg["path"]("M12.87 9.008h.322v17.984h-.322z", {["d"]: "M12.87 9.008h.322v17.984h-.322z",["fill"]: "#141414",}));el.appendChild(svg["path"]("M14.25 14.719c0 .673-.546 1.219-1.219 1.219s-1.219-.545-1.219-1.219c0-.673.546-1.219 1.219-1.219s1.219.545 1.219 1.219zm-.219 7.547c0 .786-.448 1.422-1 1.422s-1-.636-1-1.422c0-.786.448-1.422 1-1.422s1 .635 1 1.422zm.219-3.985c0 .406-.546.734-1.219.734s-1.219-.328-1.219-.734c0-.406.546-.734 1.219-.734s1.219.328 1.219.734zM11.688 13s-.125-.875.125-1.25.906-.719 1.438-.844C13.781 10.781 14.5 10 14.5 10s-.094 1.156-.969 1.875c-.875.719-1.843 1.125-1.843 1.125zm-.766 1.776s.484.312.609.781c.125.469.469.969 1.469.969v.562s-.844.062-1.312-.125c-.469-.188-.594-1.062-.594-1.375s-.172-.812-.172-.812zm4.187 0s-.484.312-.609.781c-.125.469-.469.969-1.469.969v.562s.844.062 1.312-.125c.469-.188.594-1.062.594-1.375s.172-.812.172-.812z", {["d"]: "M14.25 14.719c0 .673-.546 1.219-1.219 1.219s-1.219-.545-1.219-1.219c0-.673.546-1.219 1.219-1.219s1.219.545 1.219 1.219zm-.219 7.547c0 .786-.448 1.422-1 1.422s-1-.636-1-1.422c0-.786.448-1.422 1-1.422s1 .635 1 1.422zm.219-3.985c0 .406-.546.734-1.219.734s-1.219-.328-1.219-.734c0-.406.546-.734 1.219-.734s1.219.328 1.219.734zM11.688 13s-.125-.875.125-1.25.906-.719 1.438-.844C13.781 10.781 14.5 10 14.5 10s-.094 1.156-.969 1.875c-.875.719-1.843 1.125-1.843 1.125zm-.766 1.776s.484.312.609.781c.125.469.469.969 1.469.969v.562s-.844.062-1.312-.125c-.469-.188-.594-1.062-.594-1.375s-.172-.812-.172-.812zm4.187 0s-.484.312-.609.781c-.125.469-.469.969-1.469.969v.562s.844.062 1.312-.125c.469-.188.594-1.062.594-1.375s.172-.812.172-.812z",["fill"]: "#141414",}));el.appendChild(svg["path"]("M14.938 21.188c0-.312-.141-1.188-.609-1.375-.47-.188-1.329-.26-1.329-.26s-.844.072-1.312.26c-.469.188-.594 1.062-.594 1.375S10.922 23 10.922 23s.656-1.098.781-1.566c.125-.469.641-1.053 1.297-1.053.672 0 1.203.562 1.328 1.031.125.469.774 1.588.774 1.588s-.164-1.5-.164-1.812zM13 24v3s-.875.094-2.125-.234-1.484-.453-1.484-.453 1.272-1.273 1.828-1.75C11.875 24 13 24 13 24zm0 0v3s.875.094 2.125-.234 1.484-.453 1.484-.453-1.273-1.273-1.828-1.75C14.125 24 13 24 13 24z", {["d"]: "M14.938 21.188c0-.312-.141-1.188-.609-1.375-.47-.188-1.329-.26-1.329-.26s-.844.072-1.312.26c-.469.188-.594 1.062-.594 1.375S10.922 23 10.922 23s.656-1.098.781-1.566c.125-.469.641-1.053 1.297-1.053.672 0 1.203.562 1.328 1.031.125.469.774 1.588.774 1.588s-.164-1.5-.164-1.812zM13 24v3s-.875.094-2.125-.234-1.484-.453-1.484-.453 1.272-1.273 1.828-1.75C11.875 24 13 24 13 24zm0 0v3s.875.094 2.125-.234 1.484-.453 1.484-.453-1.273-1.273-1.828-1.75C14.125 24 13 24 13 24z",["fill"]: "#141414",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};