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
				el.appendChild(svg["path"]("M0 36h28l-9.625-17h-8.75z", {["fill"]: "#A7A9AC",["d"]: "M0 36h28l-9.625-17h-8.75z",}));el.appendChild(svg["path"]("M2.625 36h22.75l-8.75-17h-5.25z", {["fill"]: "#58595B",["d"]: "M2.625 36h22.75l-8.75-17h-5.25z",}));el.appendChild(svg["path"]("M5.25 36h17.5l-7.875-17h-1.75z", {["fill"]: "#808285",["d"]: "M5.25 36h17.5l-7.875-17h-1.75z",}));el.appendChild(svg["path"]("M24 35c0 .553-.447 1-1 1H5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1z", {["fill"]: "#A7A9AC",["d"]: "M24 35c0 .553-.447 1-1 1H5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1 0-.553.448-1 1-1h14c.553 0 1 .447 1 1zm-2-4c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1 0-.553.448-1 1-1h10c.553 0 1 .447 1 1z",}));el.appendChild(svg["path"]("M6.896 23.82C7.88 25.046 9.186 26 10.5 26h7c1.313 0 2.62-.955 3.604-2.18l-2.23-3.938C17.685 19.979 16.119 20 14 20c-2.157 0-3.74.023-4.937-.008L6.896 23.82z", {["fill"]: "#58595B",["d"]: "M6.896 23.82C7.88 25.046 9.186 26 10.5 26h7c1.313 0 2.62-.955 3.604-2.18l-2.23-3.938C17.685 19.979 16.119 20 14 20c-2.157 0-3.74.023-4.937-.008L6.896 23.82z",}));el.appendChild(svg["path"]("M15 3c0 .552-.448 1-1 1s-1-.448-1-1V2c0-.552.448-1 1-1s1 .448 1 1v1z", {["fill"]: "#414042",["d"]: "M15 3c0 .552-.448 1-1 1s-1-.448-1-1V2c0-.552.448-1 1-1s1 .448 1 1v1z",}));el.appendChild(svg["path"]("M18 5c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z", {["fill"]: "#6D6E71",["d"]: "M18 5c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M23 18c0 2.209-3.412 5-5.4 5h-7.2C8.412 23 5 20.209 5 18V8c0-2.209 1.612-4 3.6-4h10.8C21.388 4 23 5.791 23 8v10z", {["fill"]: "#D1D3D4",["d"]: "M23 18c0 2.209-3.412 5-5.4 5h-7.2C8.412 23 5 20.209 5 18V8c0-2.209 1.612-4 3.6-4h10.8C21.388 4 23 5.791 23 8v10z",}));el.appendChild(svg["path"]("M21 16c0 2.209-1.791 4-4 4h-6c-2.209 0-4-1.791-4-4v-5c0-2.209 1.791-3 4-3h6c2.209 0 4 .791 4 3v5z", {["fill"]: "#808285",["d"]: "M21 16c0 2.209-1.791 4-4 4h-6c-2.209 0-4-1.791-4-4v-5c0-2.209 1.791-3 4-3h6c2.209 0 4 .791 4 3v5z",}));el.appendChild(svg["path"]("M11 15h6c2.209 0 4-1.791 4-4v-1H7v1c0 2.209 1.791 4 4 4z", {["fill"]: "#55ACEE",["d"]: "M11 15h6c2.209 0 4-1.791 4-4v-1H7v1c0 2.209 1.791 4 4 4z",}));el.appendChild(svg["path"]("M14 20c-6.3 0-7.878-1.801-9-3.242V18c0 2.209 2.7 6 5.4 6h7.2c2.7 0 5.4-3.791 5.4-6v-1.891C21.879 17.839 20.3 20 14 20z", {["fill"]: "#5C913B",["d"]: "M14 20c-6.3 0-7.878-1.801-9-3.242V18c0 2.209 2.7 6 5.4 6h7.2c2.7 0 5.4-3.791 5.4-6v-1.891C21.879 17.839 20.3 20 14 20z",}));el.appendChild(svg["path"]("M11 17.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5 0-.829.671-1.5 1.5-1.5.828 0 1.5.671 1.5 1.5zm9 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5z", {["fill"]: "#FFD983",["d"]: "M11 17.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5 0-.829.671-1.5 1.5-1.5.828 0 1.5.671 1.5 1.5zm9 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.672-1.5 1.5-1.5s1.5.671 1.5 1.5z",}));el.appendChild(svg["path"]("M21 10V8c0-1.104-.896-2-2-2H9c-1.104 0-2 .896-2 2v2h14z", {["fill"]: "#292F33",["d"]: "M21 10V8c0-1.104-.896-2-2-2H9c-1.104 0-2 .896-2 2v2h14z",}));el.appendChild(svg["path"]("M17 8c0 .552-.447 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.553 0 1 .448 1 1z", {["fill"]: "#6D6E71",["d"]: "M17 8c0 .552-.447 1-1 1h-4c-.552 0-1-.448-1-1s.448-1 1-1h4c.553 0 1 .448 1 1z",}));el.appendChild(svg["path"]("M23 22.94L32 36h4v-5h-4l-9-10z", {["fill"]: "#58595B",["d"]: "M23 22.94L32 36h4v-5h-4l-9-10z",}));el.appendChild(svg["path"]("M36 31V21H23l9 10z", {["fill"]: "#A7A9AC",["d"]: "M36 31V21H23l9 10z",}));el.appendChild(svg["path"]("M33 24c0 1 0 1-1 1s-1 0-1-1V13c0-.552.447-1 1-1 .553 0 1 .448 1 1v11z", {["fill"]: "#6D6E71",["d"]: "M33 24c0 1 0 1-1 1s-1 0-1-1V13c0-.552.447-1 1-1 .553 0 1 .448 1 1v11z",}));el.appendChild(svg["path"]("M33 17c0 1 0 1-1 1s-1 0-1-1v-7c0-.552.447-1 1-1 .553 0 1 .448 1 1v7z", {["fill"]: "#939598",["d"]: "M33 17c0 1 0 1-1 1s-1 0-1-1v-7c0-.552.447-1 1-1 .553 0 1 .448 1 1v7z",}));el.appendChild(svg["path"]("M36 11c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v2z", {["fill"]: "#58595B",["d"]: "M36 11c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2V9c0-1.104.896-2 2-2h4c1.104 0 2 .896 2 2v2z",}));el.appendChild(svg["path"]("M34 10c0 .552-.447 1-1 1h-2c-.553 0-1-.448-1-1s.447-1 1-1h2c.553 0 1 .448 1 1z", {["fill"]: "#939598",["d"]: "M34 10c0 .552-.447 1-1 1h-2c-.553 0-1-.448-1-1s.447-1 1-1h2c.553 0 1 .448 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};