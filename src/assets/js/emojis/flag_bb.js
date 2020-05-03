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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#00267F",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z", {["fill"]: "#00267F",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z",}));el.appendChild(svg["path"]("M12 5h12v26H12z", {["fill"]: "#FFC726",["d"]: "M12 5h12v26H12z",}));el.appendChild(svg["path"]("M22.83 13.516c-1.406 0-2.5 1.031-2.859 1.438.422-.094.516.234.453.438-.444 1.477-.819 3.215-.931 4.15h-.903v-5.186l1.09-.226-1.366-.273-.283-1.377-.283 1.377-1.367.273 1.1.228v5.184h-.947c-.112-.936-.487-2.674-.931-4.15-.062-.203.031-.531.453-.438-.359-.406-1.453-1.438-2.859-1.438.613.906 2.245 3.432 2.458 6.403v.622h1.826v2.414h1.109v-2.414h1.756v-.232c.085-3.14 1.844-5.848 2.484-6.793z", {["d"]: "M22.83 13.516c-1.406 0-2.5 1.031-2.859 1.438.422-.094.516.234.453.438-.444 1.477-.819 3.215-.931 4.15h-.903v-5.186l1.09-.226-1.366-.273-.283-1.377-.283 1.377-1.367.273 1.1.228v5.184h-.947c-.112-.936-.487-2.674-.931-4.15-.062-.203.031-.531.453-.438-.359-.406-1.453-1.438-2.859-1.438.613.906 2.245 3.432 2.458 6.403v.622h1.826v2.414h1.109v-2.414h1.756v-.232c.085-3.14 1.844-5.848 2.484-6.793z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};