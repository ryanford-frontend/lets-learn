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
				el.appendChild(svg["path"]("M31 0H5C2.791 0 1 1.791 1 4v28c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4z", {["fill"]: "#292F33",["d"]: "M31 0H5C2.791 0 1 1.791 1 4v28c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M14 11c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h1c2.209 0 4 1.791 4 4v2z", {["fill"]: "#292F33",["d"]: "M14 11c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h1c2.209 0 4 1.791 4 4v2z",}));el.appendChild(svg["path"]("M22 27c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h15c1.104 0 2 .896 2 2v8zm11-8c0-1.104-.896-2-2-2h-5c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-8zM16 4c0-1.104.896-2 2-2h13c1.104 0 2 .896 2 2v9c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2V4zm-2 9c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v9z", {["fill"]: "#BE1931",["d"]: "M22 27c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h15c1.104 0 2 .896 2 2v8zm11-8c0-1.104-.896-2-2-2h-5c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-8zM16 4c0-1.104.896-2 2-2h13c1.104 0 2 .896 2 2v9c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2V4zm-2 9c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v9z",}));el.appendChild(svg["path"]("M14 13c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v6zm19 0c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h13c1.104 0 2 .896 2 2v6z", {["fill"]: "#DD2E44",["d"]: "M14 13c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v6zm19 0c0 1.104-.896 2-2 2H18c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h13c1.104 0 2 .896 2 2v6z",}));el.appendChild(svg["path"]("M22 27c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h15c1.104 0 2 .896 2 2v5z", {["fill"]: "#E1E8ED",["d"]: "M22 27c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h15c1.104 0 2 .896 2 2v5z",}));el.appendChild(svg["path"]("M33 27c0 1.104-.896 2-2 2h-5c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v5z", {["fill"]: "#DD2E44",["d"]: "M33 27c0 1.104-.896 2-2 2h-5c-1.104 0-2-.896-2-2v-5c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v5z",}));el.appendChild(svg["path"]("M27.015 9.24c1.315 1.478 1.908 3.098 1.322 3.619l-1.059.941c-.585.522-2.126-.255-3.44-1.733l-3.571-4.013c-1.314-1.479-1.907-3.099-1.321-3.62l1.059-.941c.586-.521 2.124.255 3.438 1.733l3.572 4.014z", {["fill"]: "#FFAC33",["d"]: "M27.015 9.24c1.315 1.478 1.908 3.098 1.322 3.619l-1.059.941c-.585.522-2.126-.255-3.44-1.733l-3.571-4.013c-1.314-1.479-1.907-3.099-1.321-3.62l1.059-.941c.586-.521 2.124.255 3.438 1.733l3.572 4.014z",}));el.appendChild(svg["path"]("M22.28 11.076c-.598 1.539-1.477 2.633-1.961 2.444l-.877-.341c-.485-.188-.393-1.588.205-3.126l1.625-4.178c.599-1.538 1.477-2.632 1.962-2.444l.876.341c.485.188.394 1.588-.205 3.126l-1.625 4.178z", {["fill"]: "#FFD983",["d"]: "M22.28 11.076c-.598 1.539-1.477 2.633-1.961 2.444l-.877-.341c-.485-.188-.393-1.588.205-3.126l1.625-4.178c.599-1.538 1.477-2.632 1.962-2.444l.876.341c.485.188.394 1.588-.205 3.126l-1.625 4.178z",}));el.appendChild(svg["path"]("M23.113 11.536c-1.562.535-2.965.568-3.133.076l-.305-.891c-.169-.492.962-1.324 2.522-1.858l4.242-1.45c1.562-.534 2.964-.567 3.133-.075l.304.89c.169.493-.961 1.325-2.523 1.858l-4.24 1.45z", {["fill"]: "#FFD983",["d"]: "M23.113 11.536c-1.562.535-2.965.568-3.133.076l-.305-.891c-.169-.492.962-1.324 2.522-1.858l4.242-1.45c1.562-.534 2.964-.567 3.133-.075l.304.89c.169.493-.961 1.325-2.523 1.858l-4.24 1.45z",}));el.appendChild(svg["path"]("M6.442 7.873c.373-4.106 4.907-.961 7.135 1.049-1.34 1.485-7.586 3.93-7.135-1.049z", {["fill"]: "#5C913B",["d"]: "M6.442 7.873c.373-4.106 4.907-.961 7.135 1.049-1.34 1.485-7.586 3.93-7.135-1.049z",}));el.appendChild(svg["path"]("M6.584 7.784c3.739-1.737 3.293 3.763 2.672 6.698-1.956-.414-7.206-4.59-2.672-6.698z", {["fill"]: "#5C913B",["d"]: "M6.584 7.784c3.739-1.737 3.293 3.763 2.672 6.698-1.956-.414-7.206-4.59-2.672-6.698z",}));el.appendChild(svg["path"]("M5 8c-1.2-1.6 1-5 6-5 1 1-3 9-6 5z", {["fill"]: "#77B255",["d"]: "M5 8c-1.2-1.6 1-5 6-5 1 1-3 9-6 5z",}));el.appendChild(svg["path"]("M6 27c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l1-1c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1 1C6.512 26.902 6.256 27 6 27zm12.417.499c-.256 0-.512-.098-.707-.293l-1-1c-.391-.391-.391-1.024 0-1.414.391-.391 1.024-.391 1.415 0l1 1c.391.391.391 1.023 0 1.414-.196.195-.452.293-.708.293zm-6.167-4.291c-.255 0-.511-.098-.707-.292l-.459-.458c-.391-.391-.392-1.023-.002-1.414.389-.392 1.023-.392 1.415-.002l.459.458c.391.391.392 1.023.002 1.414-.195.196-.451.294-.708.294z", {["fill"]: "#B2C2CC",["d"]: "M6 27c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l1-1c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-1 1C6.512 26.902 6.256 27 6 27zm12.417.499c-.256 0-.512-.098-.707-.293l-1-1c-.391-.391-.391-1.024 0-1.414.391-.391 1.024-.391 1.415 0l1 1c.391.391.391 1.023 0 1.414-.196.195-.452.293-.708.293zm-6.167-4.291c-.255 0-.511-.098-.707-.292l-.459-.458c-.391-.391-.392-1.023-.002-1.414.389-.392 1.023-.392 1.415-.002l.459.458c.391.391.392 1.023.002 1.414-.195.196-.451.294-.708.294z",}));el.appendChild(svg["path"]("M32.149 23.412c.707.848.592 2.109-.257 2.816l-2.305 1.921c-.848.707-2.109.592-2.816-.257l-1.921-2.305c-.707-.848-.592-2.109.257-2.816l2.305-1.921c.848-.707 2.109-.592 2.816.257l1.921 2.305z", {["fill"]: "#B26304",["d"]: "M32.149 23.412c.707.848.592 2.109-.257 2.816l-2.305 1.921c-.848.707-2.109.592-2.816-.257l-1.921-2.305c-.707-.848-.592-2.109.257-2.816l2.305-1.921c.848-.707 2.109-.592 2.816.257l1.921 2.305z",}));el.appendChild(svg["path"]("M32.149 21.412c.707.848.592 2.109-.257 2.816l-2.305 1.921c-.848.707-2.109.592-2.816-.257l-1.921-2.305c-.707-.848-.592-2.109.257-2.816l2.305-1.921c.848-.707 2.109-.592 2.816.257l1.921 2.305z", {["fill"]: "#F4900C",["d"]: "M32.149 21.412c.707.848.592 2.109-.257 2.816l-2.305 1.921c-.848.707-2.109.592-2.816-.257l-1.921-2.305c-.707-.848-.592-2.109.257-2.816l2.305-1.921c.848-.707 2.109-.592 2.816.257l1.921 2.305z",}));el.appendChild(svg["circle"](12, 26, 2, {["cy"]: "26",["r"]: "1",["fill"]: "#CCD6DD",["cx"]: "12",}));el.appendChild(svg["circle"](20, 22, 2, {["cy"]: "22",["r"]: "1",["fill"]: "#CCD6DD",["cx"]: "20",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};