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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["path"]("M20.001 13c-.055 0-.109-.004-.165-.014-.545-.091-.913-.606-.822-1.151C19.407 9.471 21.584 5 27 5c.553 0 1 .448 1 1s-.447 1-1 1c-5.095 0-5.979 4.954-6.014 5.165-.081.488-.505.835-.985.835zm-4.002 0c-.479 0-.902-.345-.985-.833C14.977 11.957 14.059 7 9 7c-.552 0-1-.448-1-1s.448-1 1-1c5.416 0 7.592 4.471 7.986 6.835.091.545-.277 1.06-.822 1.151-.055.01-.111.014-.165.014zm-4.589 4.892c-2.335 0-3.87-.997-3.964-1.06-.459-.306-.583-.927-.277-1.387.306-.46.926-.585 1.387-.277.099.064 2.602 1.636 5.998-.062.495-.247 1.095-.046 1.342.447.247.494.047 1.095-.447 1.342-1.495.746-2.868.997-4.039.997zm13.181 0c-1.172 0-2.545-.251-4.038-.998-.494-.247-.694-.848-.447-1.342.248-.494.848-.694 1.342-.447 3.4 1.7 5.899.126 6.004.059.46-.298 1.081-.17 1.382.289.302.459.179 1.074-.278 1.379-.096.063-1.631 1.06-3.965 1.06zM26.001 27c-.305 0-.604-.138-.801-.4-.025-.034-2.782-3.6-7.2-3.6-4.417 0-7.174 3.566-7.202 3.603-.333.438-.961.525-1.4.194-.44-.332-.529-.956-.198-1.397.135-.18 3.362-4.4 8.8-4.4s8.665 4.221 8.8 4.4c.332.441.242 1.068-.2 1.399-.18.136-.39.201-.599.201z", {["fill"]: "#664500",["d"]: "M20.001 13c-.055 0-.109-.004-.165-.014-.545-.091-.913-.606-.822-1.151C19.407 9.471 21.584 5 27 5c.553 0 1 .448 1 1s-.447 1-1 1c-5.095 0-5.979 4.954-6.014 5.165-.081.488-.505.835-.985.835zm-4.002 0c-.479 0-.902-.345-.985-.833C14.977 11.957 14.059 7 9 7c-.552 0-1-.448-1-1s.448-1 1-1c5.416 0 7.592 4.471 7.986 6.835.091.545-.277 1.06-.822 1.151-.055.01-.111.014-.165.014zm-4.589 4.892c-2.335 0-3.87-.997-3.964-1.06-.459-.306-.583-.927-.277-1.387.306-.46.926-.585 1.387-.277.099.064 2.602 1.636 5.998-.062.495-.247 1.095-.046 1.342.447.247.494.047 1.095-.447 1.342-1.495.746-2.868.997-4.039.997zm13.181 0c-1.172 0-2.545-.251-4.038-.998-.494-.247-.694-.848-.447-1.342.248-.494.848-.694 1.342-.447 3.4 1.7 5.899.126 6.004.059.46-.298 1.081-.17 1.382.289.302.459.179 1.074-.278 1.379-.096.063-1.631 1.06-3.965 1.06zM26.001 27c-.305 0-.604-.138-.801-.4-.025-.034-2.782-3.6-7.2-3.6-4.417 0-7.174 3.566-7.202 3.603-.333.438-.961.525-1.4.194-.44-.332-.529-.956-.198-1.397.135-.18 3.362-4.4 8.8-4.4s8.665 4.221 8.8 4.4c.332.441.242 1.068-.2 1.399-.18.136-.39.201-.599.201z",}));el.appendChild(svg["path"]("M15.391 20.08c-.453-.195-.979-.027-1.239.39l-5 8c-.192.309-.203.697-.026 1.015.176.318.51.515.874.515h3c.459 0 .859-.312.97-.758l2-8c.119-.476-.126-.97-.579-1.162zm11.457 8.39l-5-8c-.262-.418-.787-.584-1.238-.39-.453.192-.699.686-.579 1.162l2 8c.111.446.51.758.969.758h3c.363 0 .698-.197.875-.516.176-.317.166-.706-.027-1.014z", {["fill"]: "#F5F8FA",["d"]: "M15.391 20.08c-.453-.195-.979-.027-1.239.39l-5 8c-.192.309-.203.697-.026 1.015.176.318.51.515.874.515h3c.459 0 .859-.312.97-.758l2-8c.119-.476-.126-.97-.579-1.162zm11.457 8.39l-5-8c-.262-.418-.787-.584-1.238-.39-.453.192-.699.686-.579 1.162l2 8c.111.446.51.758.969.758h3c.363 0 .698-.197.875-.516.176-.317.166-.706-.027-1.014z",}));el.appendChild(svg["path"]("M31.982 30.178c.003-.06.018-.117.018-.178 0-1.656-1.344-3-3-3-1.027 0-1.932.518-2.473 1.305C26.057 28.11 25.541 28 25 28c-2.209 0-4 1.791-4 4s1.791 4 4 4c1.365 0 2.568-.687 3.29-1.731C28.77 35.289 29.798 36 31 36c1.657 0 3-1.343 3-3 0-1.312-.846-2.414-2.018-2.822zM11 28c-.542 0-1.056.11-1.527.305C8.932 27.518 8.027 27 7 27c-1.656 0-3 1.344-3 3 0 .061.014.118.018.178C2.846 30.586 2 31.688 2 33c0 1.657 1.343 3 3 3 1.202 0 2.231-.711 2.709-1.731C8.432 35.313 9.634 36 11 36c2.209 0 4-1.791 4-4s-1.791-4-4-4z", {["fill"]: "#E1E8ED",["d"]: "M31.982 30.178c.003-.06.018-.117.018-.178 0-1.656-1.344-3-3-3-1.027 0-1.932.518-2.473 1.305C26.057 28.11 25.541 28 25 28c-2.209 0-4 1.791-4 4s1.791 4 4 4c1.365 0 2.568-.687 3.29-1.731C28.77 35.289 29.798 36 31 36c1.657 0 3-1.343 3-3 0-1.312-.846-2.414-2.018-2.822zM11 28c-.542 0-1.056.11-1.527.305C8.932 27.518 8.027 27 7 27c-1.656 0-3 1.344-3 3 0 .061.014.118.018.178C2.846 30.586 2 31.688 2 33c0 1.657 1.343 3 3 3 1.202 0 2.231-.711 2.709-1.731C8.432 35.313 9.634 36 11 36c2.209 0 4-1.791 4-4s-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};