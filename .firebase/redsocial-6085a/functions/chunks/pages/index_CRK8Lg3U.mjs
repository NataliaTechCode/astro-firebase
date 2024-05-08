import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, g as createAstro, m as maybeRenderHead, h as renderComponent } from '../astro_C8KAUo-z.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, where, Timestamp, getDocs } from 'firebase/firestore';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/LabTecno/Arbu/ProyectoResumen/resumen_anual_mensual/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "D:/LabTecno/Arbu/ProyectoResumen/resumen_anual_mensual/src/components/Card.astro", void 0);

const firebaseConfig = {
  apiKey: "AIzaSyDm8BGH7HMmp5XkIohiuiKfgbWW0xWWlUc",
  authDomain: "redsocial-6085a.firebaseapp.com",
  projectId: "redsocial-6085a",
  storageBucket: "redsocial-6085a.appspot.com",
  messagingSenderId: "350152597704",
  appId: "1:350152597704:web:8a2b27bc7f8eddb95ec5fd"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loadPosts = async (usuario) => {
  const userFilter = usuario;
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  const q = query(
    collection(db, "posts"),
    where("usuario", "==", userFilter),
    where("fecha", ">=", Timestamp.fromDate(startDate)),
    where("fecha", "<=", Timestamp.fromDate(endDate))
  );

  const querySnapshot = await getDocs(q);

  // console.log("sad")
  const posts = querySnapshot.docs.map((doc) => doc.data());

  const posts2 = querySnapshot.size;
  return [posts,posts2];
};


const allPosts = async () => {
  const q = query(collection(db, "posts"));

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => doc.data());
  return posts;
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const usuario = "natalia";
  const [filtroposts, cantposts] = await loadPosts(usuario);
  const allposts = await allPosts();
  return renderTemplate`<html data-astro-cid-j7pv25f6> ${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6><h1 data-astro-cid-j7pv25f6>Resumen</h1><h3 data-astro-cid-j7pv25f6>USUARIO SIN FILTROS</h3>${allposts.map((allposts2) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": allposts2.usuario, "body": allposts2.fecha.toDate().getFullYear(), "data-astro-cid-j7pv25f6": true })}`)}<!-- {filtroposts.map((filtroposts) => <Card title={filtroposts.usuario} body={filtroposts.fecha.toDate().getFullYear()} />)} --><h3 data-astro-cid-j7pv25f6> CANTIDAD DE USUARIOS</h3>${renderComponent($$result2, "Card", $$Card, { "title": "N\xFAmero de posts filtrados", "body": `${cantposts}`, "data-astro-cid-j7pv25f6": true })}</main>` })}</html>`;
}, "D:/LabTecno/Arbu/ProyectoResumen/resumen_anual_mensual/src/pages/index.astro", void 0);

const $$file = "D:/LabTecno/Arbu/ProyectoResumen/resumen_anual_mensual/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
