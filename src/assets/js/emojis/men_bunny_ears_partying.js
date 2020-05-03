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
				el.appendChild(svg["path"]("M8.564 34.087c.131.787-2.091 1.454-2.376 1.326-.305-.137.988-.808.967-1.226-.106-2.12-.904-1.961-.818-4.18-.802-2.376-.735-4.653-.772-5.287-.087-1.472 3.804.623 3.682 1.518-.204 1.488-.663 2.321-.687 3.502.42 1.882-.304 2.499.004 4.347zm7.189-.872c.353.715.726 1.971.416 1.931-.331-.043-1.396-.505-1.736-1.427-.734-1.991-1.962-1.447-2.522-3.596-1.047-1.579-2.186-3.886-2.406-4.482-.509-1.384 3.391-1.737 3.619-.863.5 1.914.509 3.359.829 4.496.948 1.68.97 2.261 1.8 3.941z", {["fill"]: "#FFDC5D",["d"]: "M8.564 34.087c.131.787-2.091 1.454-2.376 1.326-.305-.137.988-.808.967-1.226-.106-2.12-.904-1.961-.818-4.18-.802-2.376-.735-4.653-.772-5.287-.087-1.472 3.804.623 3.682 1.518-.204 1.488-.663 2.321-.687 3.502.42 1.882-.304 2.499.004 4.347zm7.189-.872c.353.715.726 1.971.416 1.931-.331-.043-1.396-.505-1.736-1.427-.734-1.991-1.962-1.447-2.522-3.596-1.047-1.579-2.186-3.886-2.406-4.482-.509-1.384 3.391-1.737 3.619-.863.5 1.914.509 3.359.829 4.496.948 1.68.97 2.261 1.8 3.941z",}));el.appendChild(svg["path"]("M5.621 26.146c-.164.146-.57.212-.669.182-.232-.07-.745-.46-1.026-.831-.513-.675-2.601-1.446-3.103-2.856-.085-.238-.067-.524.118-.86.113-.205 1.505-2.37 2.77-3.655.336-.342 1.248-.428 1.676-.104.427.323 1.483.579 1.233 1.04-.811 1.497-3.441 2.342-4.119 3.194.974.847.851 1.353 2.193 2.22.156-.088.457-.158.538-.136.08.022.264.154.224.397.024.02.226.196.271.286.126.245.107.934-.106 1.123zm8.023.065c.176.132.586.163.682.125.225-.089.703-.521.953-.914.454-.715 2.471-1.659 2.853-3.106.065-.244.023-.528-.19-.847-.13-.195-1.698-2.235-3.066-3.41-.364-.312-1.279-.322-1.679.037-.399.358-1.433.617-1.146 1.056.934 1.424 3.628 2.129 4.375 2.922-.9.925-.735 1.419-2 2.396-.163-.075-.469-.119-.547-.09-.078.029-.25.176-.19.414-.022.021-.209.214-.246.307-.103.255-.027.939.201 1.11z", {["fill"]: "#FFDC5D",["d"]: "M5.621 26.146c-.164.146-.57.212-.669.182-.232-.07-.745-.46-1.026-.831-.513-.675-2.601-1.446-3.103-2.856-.085-.238-.067-.524.118-.86.113-.205 1.505-2.37 2.77-3.655.336-.342 1.248-.428 1.676-.104.427.323 1.483.579 1.233 1.04-.811 1.497-3.441 2.342-4.119 3.194.974.847.851 1.353 2.193 2.22.156-.088.457-.158.538-.136.08.022.264.154.224.397.024.02.226.196.271.286.126.245.107.934-.106 1.123zm8.023.065c.176.132.586.163.682.125.225-.089.703-.521.953-.914.454-.715 2.471-1.659 2.853-3.106.065-.244.023-.528-.19-.847-.13-.195-1.698-2.235-3.066-3.41-.364-.312-1.279-.322-1.679.037-.399.358-1.433.617-1.146 1.056.934 1.424 3.628 2.129 4.375 2.922-.9.925-.735 1.419-2 2.396-.163-.075-.469-.119-.547-.09-.078.029-.25.176-.19.414-.022.021-.209.214-.246.307-.103.255-.027.939.201 1.11z",}));el.appendChild(svg["path"]("M15.511 18.364c-.953-1.447-2.684-1.712-3.788-1.712H9.388v.002-.002H7.053c-1.104 0-2.835.265-3.788 1.712l2.124 2.288.147 4.008s.028 3.179.402 4.206c.564.04 1.958.198 2.797.315.043.006.203-1.076.509-2.106.238.009.587-.017.803-.065.407.69 1.073 2.028 1.101 2.002.812-.255 2.042-.664 2.621-.928-.084-1.174-.381-3.143-.381-3.143v-4.288l2.123-2.289z", {["fill"]: "#292F33",["d"]: "M15.511 18.364c-.953-1.447-2.684-1.712-3.788-1.712H9.388v.002-.002H7.053c-1.104 0-2.835.265-3.788 1.712l2.124 2.288.147 4.008s.028 3.179.402 4.206c.564.04 1.958.198 2.797.315.043.006.203-1.076.509-2.106.238.009.587-.017.803-.065.407.69 1.073 2.028 1.101 2.002.812-.255 2.042-.664 2.621-.928-.084-1.174-.381-3.143-.381-3.143v-4.288l2.123-2.289z",}));el.appendChild(svg["path"]("M12.059 17.343c0-.435-.117-.692-.672-.692v-3H7.388v3c-.555 0-.672.257-.672.692 0 .239 0 2.264 2.67 2.265h.003c2.669-.001 2.67-2.026 2.67-2.265z", {["fill"]: "#FFDC5D",["d"]: "M12.059 17.343c0-.435-.117-.692-.672-.692v-3H7.388v3c-.555 0-.672.257-.672.692 0 .239 0 2.264 2.67 2.265h.003c2.669-.001 2.67-2.026 2.67-2.265z",}));el.appendChild(svg["path"]("M7.379 16.242c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812h-4v.812z", {["fill"]: "#F9CA55",["d"]: "M7.379 16.242c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812h-4v.812z",}));el.appendChild(svg["path"]("M9.888 2.652c-1.186 0-2.282.379-3.181 1.018-1.846.096-3.319 1.611-3.319 3.482 0 1.542.007 3.484 2.038 4.207.998 1.387 2.622 2.292 4.462 2.292 3.037 0 5.5-2.462 5.5-5.499 0-3.037-2.463-5.5-5.5-5.5z", {["fill"]: "#FFAC33",["d"]: "M9.888 2.652c-1.186 0-2.282.379-3.181 1.018-1.846.096-3.319 1.611-3.319 3.482 0 1.542.007 3.484 2.038 4.207.998 1.387 2.622 2.292 4.462 2.292 3.037 0 5.5-2.462 5.5-5.499 0-3.037-2.463-5.5-5.5-5.5z",}));el.appendChild(svg["path"]("M14.388 5.652h-10v6.001c0 2.762 2.238 5 5 5s5-2.237 5-5V5.652z", {["fill"]: "#FFDC5D",["d"]: "M14.388 5.652h-10v6.001c0 2.762 2.238 5 5 5s5-2.237 5-5V5.652z",}));el.appendChild(svg["path"]("M4.417 5.152l-.5 2 .471 2.5c2.333 0 2.85-2.412 2.965-3.488.039 1.076.815 3.488 7.035 3.488l.529-2.5-.5-2h-10z", {["fill"]: "#FFAC33",["d"]: "M4.417 5.152l-.5 2 .471 2.5c2.333 0 2.85-2.412 2.965-3.488.039 1.076.815 3.488 7.035 3.488l.529-2.5-.5-2h-10z",}));el.appendChild(svg["path"]("M11.388 14.652h-4s0 1 2 1 2-1 2-1z", {["fill"]: "#C1694F",["d"]: "M11.388 14.652h-4s0 1 2 1 2-1 2-1z",}));el.appendChild(svg["circle"](6.888, 11.152, 1, {["cy"]: "11.152",["r"]: ".5",["fill"]: "#662113",["cx"]: "6.888",}));el.appendChild(svg["circle"](11.888, 11.152, 1, {["cy"]: "11.152",["r"]: ".5",["fill"]: "#662113",["cx"]: "11.888",}));el.appendChild(svg["path"]("M8.388 12.652h2s0 1-1 1-1-1-1-1z", {["fill"]: "#C1694F",["d"]: "M8.388 12.652h2s0 1-1 1-1-1-1-1z",}));el.appendChild(svg["path"]("M4.075.777c2.625-.219 3.75 2.875 3 4.25-1.968 0-3.937-1.813-3-4.25zm9.988.062c-2.625-.219-3.75 2.875-3 4.25 1.969 0 3.937-1.812 3-4.25z", {["fill"]: "#292F33",["d"]: "M4.075.777c2.625-.219 3.75 2.875 3 4.25-1.968 0-3.937-1.813-3-4.25zm9.988.062c-2.625-.219-3.75 2.875-3 4.25 1.969 0 3.937-1.812 3-4.25z",}));el.appendChild(svg["path"]("M6.7 3.902c1.812-1.438 4.344-1.062 5.156.156.031.312-.37 1.178-.688 1.031-.812-.375-2.188-.938-4.063-.062-.092-.063-.439-1.098-.405-1.125zm7.657 29.788c-.386.475.511 1.883 1.188 2.168.564.238 1.545.149 1.842-.446.186-.373-1.04-1.842-1.426-1.931-.386-.089.594.475-.356.564-.684.065-1.248-.355-1.248-.355zm-5.793.397c.505.435.654 1.474-1.069 1.801-1.268.241-2.228.086-2.347-.386-.148-.594 1.486-1.278 1.902-1.367.416-.089-.475.564.238.535.712-.03 1.276-.583 1.276-.583z", {["fill"]: "#292F33",["d"]: "M6.7 3.902c1.812-1.438 4.344-1.062 5.156.156.031.312-.37 1.178-.688 1.031-.812-.375-2.188-.938-4.063-.062-.092-.063-.439-1.098-.405-1.125zm7.657 29.788c-.386.475.511 1.883 1.188 2.168.564.238 1.545.149 1.842-.446.186-.373-1.04-1.842-1.426-1.931-.386-.089.594.475-.356.564-.684.065-1.248-.355-1.248-.355zm-5.793.397c.505.435.654 1.474-1.069 1.801-1.268.241-2.228.086-2.347-.386-.148-.594 1.486-1.278 1.902-1.367.416-.089-.475.564.238.535.712-.03 1.276-.583 1.276-.583z",}));el.appendChild(svg["path"]("M25.647 34.087c.131.787-2.091 1.454-2.376 1.326-.305-.137.988-.808.967-1.226-.106-2.12-.904-1.961-.818-4.18-.802-2.376-.735-4.653-.772-5.287-.087-1.472 3.804.623 3.682 1.518-.204 1.488-.663 2.321-.687 3.502.42 1.882-.304 2.499.004 4.347zm7.188-.872c.353.715.726 1.971.416 1.931-.331-.043-1.396-.505-1.736-1.427-.734-1.991-1.962-1.447-2.522-3.596-1.047-1.579-2.186-3.886-2.406-4.482-.509-1.384 3.391-1.737 3.619-.863.5 1.914.509 3.359.829 4.496.949 1.68.971 2.261 1.8 3.941z", {["fill"]: "#FFDC5D",["d"]: "M25.647 34.087c.131.787-2.091 1.454-2.376 1.326-.305-.137.988-.808.967-1.226-.106-2.12-.904-1.961-.818-4.18-.802-2.376-.735-4.653-.772-5.287-.087-1.472 3.804.623 3.682 1.518-.204 1.488-.663 2.321-.687 3.502.42 1.882-.304 2.499.004 4.347zm7.188-.872c.353.715.726 1.971.416 1.931-.331-.043-1.396-.505-1.736-1.427-.734-1.991-1.962-1.447-2.522-3.596-1.047-1.579-2.186-3.886-2.406-4.482-.509-1.384 3.391-1.737 3.619-.863.5 1.914.509 3.359.829 4.496.949 1.68.971 2.261 1.8 3.941z",}));el.appendChild(svg["path"]("M22.704 26.146c-.164.146-.57.212-.669.182-.232-.07-.745-.46-1.026-.831-.513-.675-2.601-1.446-3.103-2.856-.085-.238-.067-.524.118-.86.113-.205 1.505-2.37 2.77-3.655.336-.342 1.248-.428 1.676-.104.427.323 1.483.579 1.233 1.04-.811 1.497-3.441 2.342-4.119 3.194.974.847.851 1.353 2.193 2.22.156-.088.457-.158.538-.136.08.022.264.154.224.397.024.02.226.196.271.286.125.245.106.934-.106 1.123zm8.022.065c.176.132.586.163.682.125.225-.089.703-.521.953-.914.454-.715 2.471-1.659 2.853-3.106.065-.244.023-.528-.19-.847-.13-.195-1.698-2.235-3.066-3.41-.364-.312-1.279-.322-1.679.037-.399.358-1.433.617-1.146 1.056.934 1.424 3.628 2.129 4.375 2.922-.9.925-.735 1.419-2 2.396-.163-.075-.469-.119-.547-.09-.078.029-.25.176-.19.414-.022.021-.209.214-.246.307-.103.255-.026.939.201 1.11z", {["fill"]: "#FFDC5D",["d"]: "M22.704 26.146c-.164.146-.57.212-.669.182-.232-.07-.745-.46-1.026-.831-.513-.675-2.601-1.446-3.103-2.856-.085-.238-.067-.524.118-.86.113-.205 1.505-2.37 2.77-3.655.336-.342 1.248-.428 1.676-.104.427.323 1.483.579 1.233 1.04-.811 1.497-3.441 2.342-4.119 3.194.974.847.851 1.353 2.193 2.22.156-.088.457-.158.538-.136.08.022.264.154.224.397.024.02.226.196.271.286.125.245.106.934-.106 1.123zm8.022.065c.176.132.586.163.682.125.225-.089.703-.521.953-.914.454-.715 2.471-1.659 2.853-3.106.065-.244.023-.528-.19-.847-.13-.195-1.698-2.235-3.066-3.41-.364-.312-1.279-.322-1.679.037-.399.358-1.433.617-1.146 1.056.934 1.424 3.628 2.129 4.375 2.922-.9.925-.735 1.419-2 2.396-.163-.075-.469-.119-.547-.09-.078.029-.25.176-.19.414-.022.021-.209.214-.246.307-.103.255-.026.939.201 1.11z",}));el.appendChild(svg["path"]("M32.593 18.364c-.953-1.447-2.684-1.712-3.788-1.712H26.47v.002-.002h-2.335c-1.104 0-2.835.265-3.788 1.712l2.124 2.288.147 4.008s.028 3.179.402 4.206c.564.04 1.958.198 2.797.315.043.006.203-1.076.509-2.106.238.009.587-.017.803-.065.407.69 1.073 2.028 1.101 2.002.812-.255 2.042-.664 2.621-.928-.084-1.174-.381-3.143-.381-3.143v-4.288l2.123-2.289z", {["fill"]: "#292F33",["d"]: "M32.593 18.364c-.953-1.447-2.684-1.712-3.788-1.712H26.47v.002-.002h-2.335c-1.104 0-2.835.265-3.788 1.712l2.124 2.288.147 4.008s.028 3.179.402 4.206c.564.04 1.958.198 2.797.315.043.006.203-1.076.509-2.106.238.009.587-.017.803-.065.407.69 1.073 2.028 1.101 2.002.812-.255 2.042-.664 2.621-.928-.084-1.174-.381-3.143-.381-3.143v-4.288l2.123-2.289z",}));el.appendChild(svg["path"]("M29.141 17.343c0-.435-.117-.692-.672-.692v-3h-3.998v3c-.555 0-.672.257-.672.692 0 .239 0 2.264 2.67 2.265h.003c2.669-.001 2.669-2.026 2.669-2.265z", {["fill"]: "#FFDC5D",["d"]: "M29.141 17.343c0-.435-.117-.692-.672-.692v-3h-3.998v3c-.555 0-.672.257-.672.692 0 .239 0 2.264 2.67 2.265h.003c2.669-.001 2.669-2.026 2.669-2.265z",}));el.appendChild(svg["path"]("M24.462 16.242c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812h-4v.812z", {["fill"]: "#F9CA55",["d"]: "M24.462 16.242c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812h-4v.812z",}));el.appendChild(svg["path"]("M26.971 2.652c-1.186 0-2.282.379-3.181 1.018-1.847.096-3.319 1.611-3.319 3.482 0 1.542.007 3.484 2.038 4.207.998 1.387 2.622 2.292 4.462 2.292 3.037 0 5.5-2.462 5.5-5.499 0-3.037-2.463-5.5-5.5-5.5z", {["fill"]: "#FFAC33",["d"]: "M26.971 2.652c-1.186 0-2.282.379-3.181 1.018-1.847.096-3.319 1.611-3.319 3.482 0 1.542.007 3.484 2.038 4.207.998 1.387 2.622 2.292 4.462 2.292 3.037 0 5.5-2.462 5.5-5.499 0-3.037-2.463-5.5-5.5-5.5z",}));el.appendChild(svg["path"]("M31.471 5.652h-10v6.001c0 2.762 2.238 5 5 5s5-2.237 5-5V5.652z", {["fill"]: "#FFDC5D",["d"]: "M31.471 5.652h-10v6.001c0 2.762 2.238 5 5 5s5-2.237 5-5V5.652z",}));el.appendChild(svg["path"]("M21.5 5.152l-.5 2 .471 2.5c2.333 0 2.85-2.412 2.965-3.488.039 1.076.815 3.488 7.035 3.488l.529-2.5-.5-2h-10z", {["fill"]: "#FFAC33",["d"]: "M21.5 5.152l-.5 2 .471 2.5c2.333 0 2.85-2.412 2.965-3.488.039 1.076.815 3.488 7.035 3.488l.529-2.5-.5-2h-10z",}));el.appendChild(svg["path"]("M28.471 14.652h-4s0 1 2 1 2-1 2-1z", {["fill"]: "#C1694F",["d"]: "M28.471 14.652h-4s0 1 2 1 2-1 2-1z",}));el.appendChild(svg["circle"](23.971, 11.152, 1, {["cy"]: "11.152",["r"]: ".5",["fill"]: "#662113",["cx"]: "23.971",}));el.appendChild(svg["circle"](28.971, 11.152, 1, {["cy"]: "11.152",["r"]: ".5",["fill"]: "#662113",["cx"]: "28.971",}));el.appendChild(svg["path"]("M25.471 12.652h2s0 1-1 1-1-1-1-1z", {["fill"]: "#C1694F",["d"]: "M25.471 12.652h2s0 1-1 1-1-1-1-1z",}));el.appendChild(svg["path"]("M21.158.777c2.625-.219 3.75 2.875 3 4.25-1.969 0-3.937-1.813-3-4.25zm9.987.062c-2.625-.219-3.75 2.875-3 4.25 1.969 0 3.938-1.812 3-4.25z", {["fill"]: "#292F33",["d"]: "M21.158.777c2.625-.219 3.75 2.875 3 4.25-1.969 0-3.937-1.813-3-4.25zm9.987.062c-2.625-.219-3.75 2.875-3 4.25 1.969 0 3.938-1.812 3-4.25z",}));el.appendChild(svg["path"]("M23.783 3.902c1.812-1.438 4.344-1.062 5.156.156.031.312-.37 1.178-.688 1.031-.812-.375-2.188-.938-4.063-.062-.092-.063-.44-1.098-.405-1.125zm7.656 29.788c-.386.475.511 1.883 1.188 2.168.564.238 1.545.149 1.842-.446.186-.373-1.04-1.842-1.426-1.931s.594.475-.356.564c-.683.065-1.248-.355-1.248-.355zm-5.792.397c.505.435.654 1.474-1.069 1.801-1.268.241-2.228.086-2.347-.386-.149-.594 1.485-1.277 1.901-1.366.416-.089-.475.564.238.535.713-.031 1.277-.584 1.277-.584z", {["fill"]: "#292F33",["d"]: "M23.783 3.902c1.812-1.438 4.344-1.062 5.156.156.031.312-.37 1.178-.688 1.031-.812-.375-2.188-.938-4.063-.062-.092-.063-.44-1.098-.405-1.125zm7.656 29.788c-.386.475.511 1.883 1.188 2.168.564.238 1.545.149 1.842-.446.186-.373-1.04-1.842-1.426-1.931s.594.475-.356.564c-.683.065-1.248-.355-1.248-.355zm-5.792.397c.505.435.654 1.474-1.069 1.801-1.268.241-2.228.086-2.347-.386-.149-.594 1.485-1.277 1.901-1.366.416-.089-.475.564.238.535.713-.031 1.277-.584 1.277-.584z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};