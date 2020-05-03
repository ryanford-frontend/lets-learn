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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#9266CC",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M33.25 12h-2c0 7-5.411 12.687-12.25 13.202v-1.563C24.977 23.129 29.688 18 29.688 12h-2c0 5-3.814 9.136-8.688 9.638V20.06c4.009-.495 7.125-4.06 7.125-8.06h-2c0 3-2.223 5.559-5.125 6.039v-1.562C21.051 16.018 22.592 14 22.592 12h-2c0 1-.658 2-1.592 2.392V11h-2v3.392C16.066 14 15.409 13 15.409 12h-2c0 2 1.54 4.018 3.591 4.477v1.562C14.098 17.559 11.875 15 11.875 12h-2c0 4 3.116 7.564 7.125 8.06v1.579C12.126 21.136 8.312 17 8.312 12h-2c0 6 4.71 11.129 10.688 11.639v1.563C10.161 24.687 4.75 19 4.75 12h-2c0 8 6.308 14.683 14.25 15.202V29h-3c-1.104 0-2 .896-2 2h-2c-.552 0-1 .447-1 1s.448 1 1 1h16c.553 0 1-.447 1-1s-.447-1-1-1h-2c0-1.104-.896-2-2-2h-3v-1.798C26.943 26.683 33.25 20 33.25 12zm-1-6.948c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.562 0c-.303 0-.886 1.582-.985 3.918-.025.559.425 1.03.984 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.984-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.426 1.03.985 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.985-3.918zM18 4.051c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.562 1.001c-.303 0-.886 1.582-.985 3.918-.025.559.425 1.03.984 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.984-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.426 1.03.985 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.985-3.918zm-3.562 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918z", {["fill"]: "#FFF",["d"]: "M33.25 12h-2c0 7-5.411 12.687-12.25 13.202v-1.563C24.977 23.129 29.688 18 29.688 12h-2c0 5-3.814 9.136-8.688 9.638V20.06c4.009-.495 7.125-4.06 7.125-8.06h-2c0 3-2.223 5.559-5.125 6.039v-1.562C21.051 16.018 22.592 14 22.592 12h-2c0 1-.658 2-1.592 2.392V11h-2v3.392C16.066 14 15.409 13 15.409 12h-2c0 2 1.54 4.018 3.591 4.477v1.562C14.098 17.559 11.875 15 11.875 12h-2c0 4 3.116 7.564 7.125 8.06v1.579C12.126 21.136 8.312 17 8.312 12h-2c0 6 4.71 11.129 10.688 11.639v1.563C10.161 24.687 4.75 19 4.75 12h-2c0 8 6.308 14.683 14.25 15.202V29h-3c-1.104 0-2 .896-2 2h-2c-.552 0-1 .447-1 1s.448 1 1 1h16c.553 0 1-.447 1-1s-.447-1-1-1h-2c0-1.104-.896-2-2-2h-3v-1.798C26.943 26.683 33.25 20 33.25 12zm-1-6.948c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.562 0c-.303 0-.886 1.582-.985 3.918-.025.559.425 1.03.984 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.984-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.426 1.03.985 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.985-3.918zM18 4.051c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.562 1.001c-.303 0-.886 1.582-.985 3.918-.025.559.425 1.03.984 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.984-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918zm-3.563 0c-.303 0-.886 1.582-.985 3.918-.024.559.426 1.03.985 1.03.56 0 1.009-.471.985-1.03-.099-2.336-.682-3.918-.985-3.918zm-3.562 0c-.303 0-.886 1.582-.985 3.918-.024.559.425 1.03.985 1.03s1.009-.471.985-1.03c-.099-2.336-.682-3.918-.985-3.918z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};