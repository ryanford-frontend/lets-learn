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
				el.appendChild(svg["path"]("M29.08 31.069s-.77.477-1.539 0c-.77-.477-.311-1.246-.311-1.246-.867-.075-.958-.878-.643-1.604C26.081 28.08 25.551 28 25 28H11c-3.313 0-6 2.687-6 6v2h26v-2c0-.62-.094-1.219-.269-1.782-1.684.642-1.651-1.149-1.651-1.149z", {["fill"]: "#FA743E",["d"]: "M29.08 31.069s-.77.477-1.539 0c-.77-.477-.311-1.246-.311-1.246-.867-.075-.958-.878-.643-1.604C26.081 28.08 25.551 28 25 28H11c-3.313 0-6 2.687-6 6v2h26v-2c0-.62-.094-1.219-.269-1.782-1.684.642-1.651-1.149-1.651-1.149z",}));el.appendChild(svg["path"]("M25.929 33.341c-.127 1.929-.83 2.659-.83 2.659h1.385s.189-2.975-.555-2.659zm-19.312.621c.319-.251.872-1.996 1.869-2.411s3.206-.957 3.173.09-1.34 2.485-1.068 3.018c-.98.476-4.987.099-3.974-.697z", {["fill"]: "#DD551F",["d"]: "M25.929 33.341c-.127 1.929-.83 2.659-.83 2.659h1.385s.189-2.975-.555-2.659zm-19.312.621c.319-.251.872-1.996 1.869-2.411s3.206-.957 3.173.09-1.34 2.485-1.068 3.018c-.98.476-4.987.099-3.974-.697z",}));el.appendChild(svg["path"]("M7.238 33.802c.319-.251.651-1.746 1.648-2.16s2.806-1.047 2.772 0-1.23 1.685-2.21 2.16c-.979.475-3.222.795-2.21 0zM14 28h8s-.866 3.069-4 3.069S14 28 14 28z", {["fill"]: "#CCD6DD",["d"]: "M7.238 33.802c.319-.251.651-1.746 1.648-2.16s2.806-1.047 2.772 0-1.23 1.685-2.21 2.16c-.979.475-3.222.795-2.21 0zM14 28h8s-.866 3.069-4 3.069S14 28 14 28z",}));el.appendChild(svg["path"]("M14.5 28.518c1.466 1.065 2.792.98 3.5.98s2.194.085 3.488-.949l.012-4.14h-7v4.109z", {["fill"]: "#CCD6DD",["d"]: "M14.5 28.518c1.466 1.065 2.792.98 3.5.98s2.194.085 3.488-.949l.012-4.14h-7v4.109z",}));el.appendChild(svg["path"]("M14.483 26.088c.978 1.155 2.19 1.468 3.508 1.468 1.319 0 2.532-.312 3.51-1.468v-2.937h-7.017v2.937z", {["fill"]: "#99AAB5",["d"]: "M14.483 26.088c.978 1.155 2.19 1.468 3.508 1.468 1.319 0 2.532-.312 3.51-1.468v-2.937h-7.017v2.937z",}));el.appendChild(svg["path"]("M21.226 5.683c-1.729-.559-5.798-.407-6.815.915-2.644.051-5.747 2.441-6.154 5.594-.403 3.121.495 4.57.814 6.916.362 2.659 1.856 3.509 3.051 3.865 1.719 2.271 3.547 2.174 6.615 2.174 5.992 0 8.847-4.01 9.099-10.82.154-4.118-2.263-7.237-6.61-8.644z", {["fill"]: "#292F33",["d"]: "M21.226 5.683c-1.729-.559-5.798-.407-6.815.915-2.644.051-5.747 2.441-6.154 5.594-.403 3.121.495 4.57.814 6.916.362 2.659 1.856 3.509 3.051 3.865 1.719 2.271 3.547 2.174 6.615 2.174 5.992 0 8.847-4.01 9.099-10.82.154-4.118-2.263-7.237-6.61-8.644z",}));el.appendChild(svg["path"]("M24.653 14.62c-.58-.803-1.322-1.449-2.95-1.678.61.28 1.195 1.246 1.271 1.78.076.534.153.966-.331.432-1.935-2.139-4.043-1.297-6.132-2.604-1.459-.913-1.903-1.922-1.903-1.922s-.178 1.348-2.39 2.721c-.641.398-1.406 1.285-1.831 2.594-.305.941-.211 1.78-.211 3.214 0 4.186 3.449 7.705 7.705 7.705s7.705-3.55 7.705-7.705c.001-2.605-.272-3.622-.933-4.537z", {["fill"]: "#CCD6DD",["d"]: "M24.653 14.62c-.58-.803-1.322-1.449-2.95-1.678.61.28 1.195 1.246 1.271 1.78.076.534.153.966-.331.432-1.935-2.139-4.043-1.297-6.132-2.604-1.459-.913-1.903-1.922-1.903-1.922s-.178 1.348-2.39 2.721c-.641.398-1.406 1.285-1.831 2.594-.305.941-.211 1.78-.211 3.214 0 4.186 3.449 7.705 7.705 7.705s7.705-3.55 7.705-7.705c.001-2.605-.272-3.622-.933-4.537z",}));el.appendChild(svg["path"]("M17.941 22.4c1.807 0 2.753.794 2.854.885.301.267.301.7 0 .967-.299.265-.779.267-1.081.007-.04-.032-.62-.491-1.773-.491-1.168 0-1.749.473-1.773.492-.308.256-.791.248-1.083-.02-.292-.269-.292-.691.004-.955.101-.091 1.046-.885 2.852-.885", {["fill"]: "#66757F",["d"]: "M17.941 22.4c1.807 0 2.753.794 2.854.885.301.267.301.7 0 .967-.299.265-.779.267-1.081.007-.04-.032-.62-.491-1.773-.491-1.168 0-1.749.473-1.773.492-.308.256-.791.248-1.083-.02-.292-.269-.292-.691.004-.955.101-.091 1.046-.885 2.852-.885",}));el.appendChild(svg["path"]("M16.326 18.737l-.655.655c-.765.765-2.016.765-2.781 0-.765-.765-.765-2.016 0-2.781l.655-.655c.765-.765 2.016-.765 2.781 0 .765.765.765 2.016 0 2.781zm3.984.654l-.655-.655c-.765-.765-.765-2.016 0-2.781.765-.765 2.016-.765 2.781 0l.655.655c.765.765.765 2.016 0 2.781-.765.765-2.016.765-2.781 0z", {["fill"]: "#99AAB5",["d"]: "M16.326 18.737l-.655.655c-.765.765-2.016.765-2.781 0-.765-.765-.765-2.016 0-2.781l.655-.655c.765-.765 2.016-.765 2.781 0 .765.765.765 2.016 0 2.781zm3.984.654l-.655-.655c-.765-.765-.765-2.016 0-2.781.765-.765 2.016-.765 2.781 0l.655.655c.765.765.765 2.016 0 2.781-.765.765-2.016.765-2.781 0z",}));el.appendChild(svg["path"]("M15.877 17.528c0 .465-.381.846-.847.846h-.845c-.465 0-.846-.381-.846-.846 0-.466.381-.847.846-.847h.845c.467 0 .847.381.847.847m6.765-.001c0 .465-.381.846-.847.846h-.845c-.465 0-.846-.381-.846-.846 0-.465.381-.846.846-.846h.845c.466.001.847.381.847.846", {["fill"]: "#662113",["d"]: "M15.877 17.528c0 .465-.381.846-.847.846h-.845c-.465 0-.846-.381-.846-.846 0-.466.381-.847.846-.847h.845c.467 0 .847.381.847.847m6.765-.001c0 .465-.381.846-.847.846h-.845c-.465 0-.846-.381-.846-.846 0-.465.381-.846.846-.846h.845c.466.001.847.381.847.846",}));el.appendChild(svg["path"]("M18.802 21.409c.252 0 .458-.206.458-.458v-.584c0-.252-.206-.458-.458-.458s-.458.206-.458.458v.584c0 .252.206.458.458.458zm-1.621 0c.252 0 .458-.206.458-.458v-.584c0-.252-.206-.458-.458-.458s-.458.206-.458.458v.584c0 .252.206.458.458.458z", {["fill"]: "#99AAB5",["d"]: "M18.802 21.409c.252 0 .458-.206.458-.458v-.584c0-.252-.206-.458-.458-.458s-.458.206-.458.458v.584c0 .252.206.458.458.458zm-1.621 0c.252 0 .458-.206.458-.458v-.584c0-.252-.206-.458-.458-.458s-.458.206-.458.458v.584c0 .252.206.458.458.458z",}));el.appendChild(svg["path"]("M17.7 5.445c1.173-.195 2.067-1.049 2.405-1.461s.228 1.174-.405 1.804-2-.343-2-.343zm-4.524 1.373c-1.431-.33-2.446-.083-3.012.22s.563-.055 1.994.688 1.018-.908 1.018-.908zm-.413 6.055c-.55.771-1.101 2.064-1.018 3.193.083 1.128-1.183-.853-.138-2.67s1.156-.523 1.156-.523zM26.08 8.932c1.188.583 1.958 1.547 2.206 2.097s.798.908 1.101.963c.303.055-.248.33-.963 0-.716-.33-1.239-1.134-1.817-1.365-.578-.231-.527-1.695-.527-1.695zM8.288 15.316c-.011 1.218-.561 1.939-.864 2.212-.303.272.881.322 1.321-1.052.44-1.373-.457-1.16-.457-1.16z", {["fill"]: "#292F33",["d"]: "M17.7 5.445c1.173-.195 2.067-1.049 2.405-1.461s.228 1.174-.405 1.804-2-.343-2-.343zm-4.524 1.373c-1.431-.33-2.446-.083-3.012.22s.563-.055 1.994.688 1.018-.908 1.018-.908zm-.413 6.055c-.55.771-1.101 2.064-1.018 3.193.083 1.128-1.183-.853-.138-2.67s1.156-.523 1.156-.523zM26.08 8.932c1.188.583 1.958 1.547 2.206 2.097s.798.908 1.101.963c.303.055-.248.33-.963 0-.716-.33-1.239-1.134-1.817-1.365-.578-.231-.527-1.695-.527-1.695zM8.288 15.316c-.011 1.218-.561 1.939-.864 2.212-.303.272.881.322 1.321-1.052.44-1.373-.457-1.16-.457-1.16z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};