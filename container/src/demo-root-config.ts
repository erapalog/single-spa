import { registerApplication, start } from "single-spa";

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

 registerApplication({
   name: "@walmart/mf-header",
   app: () => System.import("@walmart/mf-header"),
   activeWhen: ["/"]
 });

 registerApplication({
  name: "@walmart/mf-usuario",
  app: () => System.import("@walmart/mf-usuario"),
  activeWhen: ["/seguridad"]
});

registerApplication({
  name: "@walmart/mf-login",
  app: () => System.import("@walmart/mf-login"),
  activeWhen: ["/login"]
});

registerApplication({
  name: "@walmart/personal",
  app: () => System.import("@walmart/personal"),
  activeWhen: ["/personal"]
});

start({
  urlRerouteOnly: true,
});
