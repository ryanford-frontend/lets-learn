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
				el.appendChild(svg["path"]("M10.746 21.521c1.668 0 7.43 4.345 7.427 9.701.003 5.358-14.853 5.358-14.854-.001.001-5.356 5.759-9.7 7.427-9.7z", {["fill"]: "#99AAB5",["d"]: "M10.746 21.521c1.668 0 7.43 4.345 7.427 9.701.003 5.358-14.853 5.358-14.854-.001.001-5.356 5.759-9.7 7.427-9.7z",}));el.appendChild(svg["path"]("M8.541 25.182c8.839 8.84 17.337 5.163 20.033 2.469 2.695-2.696-.158-9.916-6.371-16.129C15.988 5.308 8.767 2.455 6.072 5.15 3.377 7.845-.299 16.343 8.541 25.182z", {["fill"]: "#CCD6DD",["d"]: "M8.541 25.182c8.839 8.84 17.337 5.163 20.033 2.469 2.695-2.696-.158-9.916-6.371-16.129C15.988 5.308 8.767 2.455 6.072 5.15 3.377 7.845-.299 16.343 8.541 25.182z",}));el.appendChild(svg["path"]("M12.443 21.278c6.214 6.214 13.434 9.066 16.13 6.372 2.695-2.696-.158-9.916-6.371-16.129C15.988 5.308 8.767 2.455 6.072 5.15c-2.695 2.695.158 9.916 6.371 16.128z", {["fill"]: "#66757F",["d"]: "M12.443 21.278c6.214 6.214 13.434 9.066 16.13 6.372 2.695-2.696-.158-9.916-6.371-16.129C15.988 5.308 8.767 2.455 6.072 5.15c-2.695 2.695.158 9.916 6.371 16.128z",}));el.appendChild(svg["path"]("M22.202 11.521c.443.444.443 1.163 0 1.607l-7.233 7.231c-.444.444-1.163.444-1.607 0-.444-.443-.444-1.163 0-1.607l7.232-7.231c.445-.444 1.163-.444 1.608 0z", {["fill"]: "#CCD6DD",["d"]: "M22.202 11.521c.443.444.443 1.163 0 1.607l-7.233 7.231c-.444.444-1.163.444-1.607 0-.444-.443-.444-1.163 0-1.607l7.232-7.231c.445-.444 1.163-.444 1.608 0z",}));el.appendChild(svg["path"]("M23.809 9.915c.887.887.887 2.327 0 3.214-.888.888-2.327.888-3.215 0-.887-.887-.887-2.327 0-3.214.887-.889 2.327-.889 3.215 0z", {["fill"]: "#CCD6DD",["d"]: "M23.809 9.915c.887.887.887 2.327 0 3.214-.888.888-2.327.888-3.215 0-.887-.887-.887-2.327 0-3.214.887-.889 2.327-.889 3.215 0z",}));el.appendChild(svg["path"]("M28.287 13.078l-.051-.001c-.552-.027-.976-.497-.949-1.048.001-.016.063-2.157-1.58-3.8-1.638-1.637-3.772-1.579-3.801-1.58-.55.033-1.021-.398-1.049-.948-.027-.552.397-1.022.949-1.049.122-.012 3.028-.123 5.314 2.163 2.287 2.288 2.17 5.191 2.164 5.314-.026.533-.468.949-.997.949z", {["fill"]: "#FFAC33",["d"]: "M28.287 13.078l-.051-.001c-.552-.027-.976-.497-.949-1.048.001-.016.063-2.157-1.58-3.8-1.638-1.637-3.772-1.579-3.801-1.58-.55.033-1.021-.398-1.049-.948-.027-.552.397-1.022.949-1.049.122-.012 3.028-.123 5.314 2.163 2.287 2.288 2.17 5.191 2.164 5.314-.026.533-.468.949-.997.949z",}));el.appendChild(svg["path"]("M31.846 12.522c-.109 0-.221-.019-.33-.057-.521-.183-.796-.753-.613-1.274.034-.107.893-2.876-2.195-5.963-3.126-3.127-6.126-2.414-6.252-2.382-.529.137-1.077-.184-1.216-.715-.14-.531.172-1.074.701-1.217.17-.046 4.205-1.077 8.181 2.901 4.016 4.014 2.726 7.876 2.668 8.039-.144.41-.531.668-.944.668z", {["fill"]: "#FFAC33",["d"]: "M31.846 12.522c-.109 0-.221-.019-.33-.057-.521-.183-.796-.753-.613-1.274.034-.107.893-2.876-2.195-5.963-3.126-3.127-6.126-2.414-6.252-2.382-.529.137-1.077-.184-1.216-.715-.14-.531.172-1.074.701-1.217.17-.046 4.205-1.077 8.181 2.901 4.016 4.014 2.726 7.876 2.668 8.039-.144.41-.531.668-.944.668z",}));el.appendChild(svg["path"]("M10.914 32.521c-2.9 0-5.543-.658-7.566-1.737-.008.146-.029.29-.029.438.001 5.359 14.857 5.359 14.854.001 0-.09-.015-.177-.018-.266-1.977.976-4.496 1.564-7.241 1.564z", {["fill"]: "#66757F",["d"]: "M10.914 32.521c-2.9 0-5.543-.658-7.566-1.737-.008.146-.029.29-.029.438.001 5.359 14.857 5.359 14.854.001 0-.09-.015-.177-.018-.266-1.977.976-4.496 1.564-7.241 1.564z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};