export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  featured: boolean;
  stock: number | null;
  images: string[];
  sizes: string[];
  /** Stock físico real por talle. Talle ausente = sin stock. */
  stockBySize: Record<string, number>;
}

export const products: Product[] = [
  {
    "id": "bota-converse-black_64407637fff7120008d77529",
    "title": "🥾Bota Converse Black🖤",
    "description": "All Star Chuck Taylor Negro Total. Materiales y detalles originales. Incluido logos.",
    "price": 42999,
    "category": "All Star Botitas",
    "featured": true,
    "stock": 5,
    "images": [
      "/__l5e/assets-v1/90240a45-ff0c-441a-b4f2-bd6267555dd6/zz-00.jpg",
      "/__l5e/assets-v1/7dad9fd1-2cb2-410d-86ae-22530ad2973d/zz-01.jpg",
      "/__l5e/assets-v1/e84e44a5-db88-4b16-a102-bbb4912cc064/zz-02.jpg"
    ],
    "sizes": [
      "37",
      "38",
      "42",
      "43",
      "44"
    ],
    "stockBySize": {
      "37": 2,
      "42": 1,
      "43": 1
    }
  },
  {
    "id": "converse-clasica_64548c0e7c863f0008380c06",
    "title": "👟Converse Clásica⚡️",
    "description": "All Star Negra con base, cordones y puntera blanca. Clásica. Materiales y detalles originales.",
    "price": 37599,
    "category": "All Star Bajas",
    "featured": false,
    "stock": 3,
    "images": [
      "/__l5e/assets-v1/f7777edf-d8b1-467e-a37d-46506f3bf8b6/zz-10.jpg",
      "/__l5e/assets-v1/ee331847-c24a-4dbd-8a09-a81f880cc093/zz-11.jpg",
      "/__l5e/assets-v1/980ff8be-19a1-495e-8aa6-1a50949d66f8/zz-12.jpg"
    ],
    "sizes": [
      "36",
      "41"
    ],
    "stockBySize": {
      "35": 1,
      "36": 2,
      "41": 1
    }
  },
  {
    "id": "converse-blanca_64548cdbc27c40000834c562",
    "title": "👟Converse Blanca 🕊️",
    "description": "Converse All Star Blanca. Lisa, salvo líneas rojos y azules alrededor. Materiales y detalles originales.",
    "price": 37599,
    "category": "All Star Bajas",
    "featured": true,
    "stock": 4,
    "images": [
      "/__l5e/assets-v1/5110085a-abe1-4274-9861-b76bb031cc1b/zz-03.jpg",
      "/__l5e/assets-v1/380c0078-33c0-4428-951c-45d21b361482/zz-04.jpg",
      "/__l5e/assets-v1/8dbdaa13-619c-4dff-93d0-8cb768e3b82d/zz-05.jpg"
    ],
    "sizes": [
      "39",
      "40"
    ],
    "stockBySize": {
      "39": 1
    }
  },
  {
    "id": "converse-aero_64548f647c863f0008380c07",
    "title": "👟Converse Aero🫐",
    "description": "Converse All Star Celeste.Puntera, cordones y base blanco. Materiales y detalles originales.",
    "price": 37599,
    "category": "All Star Bajas",
    "featured": true,
    "stock": 5,
    "images": [
      "/__l5e/assets-v1/ecb33744-fd5e-40fe-b5f0-ed16606081dd/zz-06.jpg",
      "/__l5e/assets-v1/df62b338-5ae3-4877-8010-0a1569d02014/zz-07.jpg",
      "/__l5e/assets-v1/33c76176-6aec-44b5-b8ed-5db6d927b248/zz-08.jpg",
      "/__l5e/assets-v1/72883f76-19e4-4a1a-b123-4852d1404830/zz-09.jpg"
    ],
    "sizes": [
      "36",
      "37",
      "38",
      "39",
      "40",
      "44"
    ],
    "stockBySize": {
      "36": 1,
      "38": 1,
      "40": 1,
      "44": 1
    }
  },
  {
    "id": "converse-bota-clasica_645514a08ac8e50008bba557",
    "title": "🥾Converse Bota Clásica⚡️",
    "description": "All Star Chuck Taylor Negra con puntera, cordones, base y logo de Converse en blanco.",
    "price": 42999,
    "category": "All Star Botitas",
    "featured": false,
    "stock": 5,
    "images": [
      "/__l5e/assets-v1/45aa6992-e4a4-42c3-af80-8be33b8d782b/zz-16.jpg",
      "/__l5e/assets-v1/f8a31f41-1163-4600-99db-a272645dbea8/zz-17.jpg",
      "/__l5e/assets-v1/4f8f2e34-2593-425e-8078-61e2f9631000/zz-18.jpg"
    ],
    "sizes": [
      "35"
    ],
    "stockBySize": {}
  },
  {
    "id": "converse-bota-blanca_645515ac46f1af0008bbc428",
    "title": "🥾Converse Bota Blanca🕊️",
    "description": "All Star Chuck Taylor Blanca. Lisa con líneas roja y azul alrededor.",
    "price": 42999,
    "category": "All Star Botitas",
    "featured": false,
    "stock": 2,
    "images": [
      "/__l5e/assets-v1/6087c910-491c-43d5-a022-a49823340d6b/zz-13.jpg",
      "/__l5e/assets-v1/ffc6432b-5f9a-4693-b834-dcd2a6992e79/zz-14.jpg",
      "/__l5e/assets-v1/8aecd8d2-5240-492e-aa8b-47f95d357f88/zz-15.jpg"
    ],
    "sizes": [
      "35",
      "37",
      "38"
    ],
    "stockBySize": {
      "35": 1,
      "37": 1
    }
  },
  {
    "id": "vans-bota-clasica_6455198a9ac6f40008db7086",
    "title": "🥾Vans Bota Clásica⚡️",
    "description": "Sk8-Hi Negra con cordones, base y franja blancos. Materiales y detalles originales!",
    "price": 42999,
    "category": "Vans Botitas",
    "featured": true,
    "stock": 14,
    "images": [
      "/__l5e/assets-v1/c76f58ca-7e8b-4580-9796-d59b44bdfd5b/zz-66.jpg",
      "/__l5e/assets-v1/a15057bc-b80a-4b2a-aca3-17ca7da1bec4/zz-67-fix.jpg",
      "/__l5e/assets-v1/e6922ba4-8518-4e63-b91b-bc7e5d679842/zz-68.jpg"
    ],
    "sizes": [
      "43",
      "42",
      "41",
      "40",
      "39",
      "38"
    ],
    "stockBySize": {
      "38": 1,
      "39": 2,
      "40": 2,
      "42": 1,
      "43": 1
    }
  },
  {
    "id": "vans-bota-black_645529a3de906b0008bb0487",
    "title": "🥾Vans Bota Black♣️",
    "description": "Sk8-Hi Vans Negro Total. Materiales y detalles originales.",
    "price": 42999,
    "category": "Vans Botitas",
    "featured": true,
    "stock": 8,
    "images": [
      "/__l5e/assets-v1/084eef56-54d2-4670-bd3f-aa1a33bbc17f/zz-19.jpg",
      "/__l5e/assets-v1/8c54414e-8367-4441-80b9-9a5a33a06009/zz-20.jpg",
      "/__l5e/assets-v1/19e11033-c869-4241-92ab-fdbe85dc05f2/zz-21.jpg",
      "/__l5e/assets-v1/0c25bd56-f4c6-4a26-98c8-566f5eec24d4/zz-22.jpg"
    ],
    "sizes": [
      "42",
      "41",
      "39",
      "38",
      "37",
      "36"
    ],
    "stockBySize": {
      "36": 1,
      "39": 2,
      "42": 1
    }
  },
  {
    "id": "vans-clasica_64552b969ac6f40008db762c",
    "title": "👟Vans Clásica⭐️",
    "description": "Old Skool Vans Negra con cordones, franja y base blancos. Materias y detalles originales.",
    "price": 37599,
    "category": "Vans Bajas",
    "featured": false,
    "stock": 14,
    "images": [
      "/__l5e/assets-v1/bc7d4b9a-55c8-4a59-b876-97b160d0090a/zz-59.jpg",
      "/__l5e/assets-v1/50da2152-70ac-4e74-9997-6efa0bc70241/zz-60.jpg",
      "/__l5e/assets-v1/2d47c9a2-7f01-4721-aab0-64a345222212/zz-61.jpg",
      "/__l5e/assets-v1/7acc20e0-641e-4535-b4ff-edea43ca78d4/zz-62.jpg"
    ],
    "sizes": [
      "42",
      "41",
      "40"
    ],
    "stockBySize": {
      "40": 1,
      "41": 1,
      "42": 1
    }
  },
  {
    "id": "vans-base-blanca_64552d08f085830008cc9a0c",
    "title": "👟Vans Base Blanca🔲",
    "description": "Old Skool Vans Negra y Base Blanca. Materiales y detalles originales. ",
    "price": 37599,
    "category": "Vans Bajas",
    "featured": false,
    "stock": 8,
    "images": [
      "/__l5e/assets-v1/3dde812d-f586-4e63-a639-7d98af27b5f7/zz-23.jpg",
      "/__l5e/assets-v1/7e3e8506-53cd-462e-ba19-f23a10415141/zz-24.jpg",
      "/__l5e/assets-v1/40168ce0-f99b-4cfa-a40d-ff24e6028e2b/zz-25.jpg"
    ],
    "sizes": [
      "42",
      "41",
      "36"
    ],
    "stockBySize": {
      "36": 1,
      "42": 2
    }
  },
  {
    "id": "vans-caramelo_64552e7a9ac6f40008db7635",
    "title": "👟Vans Caramelo🤎",
    "description": "Old Skool Vans Negras con Base Caramelo",
    "price": 37599,
    "category": "Vans Bajas",
    "featured": false,
    "stock": 2,
    "images": [
      "/__l5e/assets-v1/103907d0-a05a-4a4d-9204-a7785dd92396/zz-26.jpg",
      "/__l5e/assets-v1/3299f5f0-0fef-4aa1-be89-dd5477be02b2/zz-27.jpg",
      "/__l5e/assets-v1/c3af47ae-1390-4d0e-b841-c4b4fc51256a/zz-28.jpg"
    ],
    "sizes": [
      "37"
    ],
    "stockBySize": {
      "37": 1
    }
  },
  {
    "id": "vans-aero_64552f75f085830008cc9a0f",
    "title": "👟Vans Aero🌀",
    "description": "Old Skool Vans Azul y Negro. Materias y detalles originales.",
    "price": 37599,
    "category": "Vans Bajas",
    "featured": false,
    "stock": 4,
    "images": [
      "/__l5e/assets-v1/dd38046d-1689-4503-bffb-ec98b3513ad8/zz-29.jpg",
      "/__l5e/assets-v1/9e04b460-85c9-40ed-9d0b-8ca5f7161b47/zz-30.jpg",
      "/__l5e/assets-v1/1c3df956-5823-4bb5-9c30-5cff9dcdae46/zz-31.jpg"
    ],
    "sizes": [
      "42",
      "40"
    ],
    "stockBySize": {
      "39": 1,
      "42": 1,
      "43": 1
    }
  },
  {
    "id": "converse-clasica-kids_6455567af59d070008354538",
    "title": "👟Converse Clásica Kids⚡️",
    "description": "All Star Negra con puntera, cordones y base blancos. Materiales y detalles originales. Del Talle 31 al 34📌",
    "price": 32599,
    "category": "All Star Kids",
    "featured": false,
    "stock": 4,
    "images": [
      "/__l5e/assets-v1/5103682d-6280-4f66-bc62-220b372706bb/zz-32.jpg",
      "/__l5e/assets-v1/d97c7aa3-62b5-48d0-8b48-e3cdaa36fd87/zz-33.jpg",
      "/__l5e/assets-v1/346a10d9-86b7-4fdf-b2c1-802048ee79a8/zz-34.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "31": 1,
      "33": 2
    }
  },
  {
    "id": "all-star-kids-blanco_64556442f59d070008354548",
    "title": "👟All Star Kids Blanco🤍",
    "description": "Converse All Star Blanco Kids. Materiales y detalles originales. Talles del 31 al 34.",
    "price": 32599,
    "category": "All Star Kids",
    "featured": false,
    "stock": 3,
    "images": [
      "/__l5e/assets-v1/889b12bf-53fb-400a-838f-af22d6f30a34/zz-35.jpg",
      "/__l5e/assets-v1/92113be2-81c6-40f4-9e8e-95dade3a3c64/zz-36.jpg",
      "/__l5e/assets-v1/7036f3d0-9ae3-4c75-9648-500e2e1f6b3a/zz-37.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "34": 1
    }
  },
  {
    "id": "vans-black-kids_64587e66a8f9f200082a3b29",
    "title": "👟Vans Black Kids♣️",
    "description": "Kids Vans Negro Total. Materiales y detalles originales. Talles del 31 al 34📌",
    "price": 32599,
    "category": "Vans Kids",
    "featured": false,
    "stock": 6,
    "images": [
      "/__l5e/assets-v1/3d17461d-2f22-41a2-aa2d-1127a60cda28/zz-40.jpg",
      "/__l5e/assets-v1/2221e518-c2fe-4b66-980f-37bccb7d882d/zz-41.jpg",
      "/__l5e/assets-v1/622d6d54-f616-4a2c-ab72-02edf8fd7889/zz-42.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "33": 1,
      "34": 2
    }
  },
  {
    "id": "vans-caramelo-kids_645881464573b80008739e62",
    "title": "👟Vans Caramelo Kids🤎",
    "description": "Kids Vans Negro con Base Caramelo. Materiales y detalles originales. Talles del 31 al 34📌",
    "price": 32599,
    "category": "Vans Kids",
    "featured": false,
    "stock": 4,
    "images": [
      "/__l5e/assets-v1/056e5f53-077c-4c55-936c-6d12c35617d0/zz-43.jpg",
      "/__l5e/assets-v1/0116bd5c-f6cd-4fb5-a683-dd54ec285f20/zz-44.jpg",
      "/__l5e/assets-v1/c8b56fbc-48ba-4fad-82fc-3ba757159e33/zz-45.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "32": 1,
      "33": 1,
      "34": 1
    }
  },
  {
    "id": "vans-clasicas-kids_6458831cc4f80f000860aeb8",
    "title": "👟Vans Clásicas Kids⚡️",
    "description": "Kids Vans Negra con base, cordones y franja blancos. Materiales y detalles originales. Talle del 31 al 34📌",
    "price": 32599,
    "category": "Vans Kids",
    "featured": false,
    "stock": 3,
    "images": [
      "/__l5e/assets-v1/6e79227f-c9c3-4d2b-8b30-ed3f8bca9d3e/zz-46.jpg",
      "/__l5e/assets-v1/dae4c952-58d4-4403-a068-956a6600530d/zz-47.jpg",
      "/__l5e/assets-v1/b2e9fe8b-05f5-42fe-b698-a30c2e7a87a0/zz-48.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "32": 4
    }
  },
  {
    "id": "vans-aero-kids_6458866ec4f80f000860aeb9",
    "title": "👟Vans Aero Kids🫐",
    "description": "Kids Vans Azules y Negro. Materiales y detalles originales. Del talle 31 am 34",
    "price": 32599,
    "category": "Vans Kids",
    "featured": false,
    "stock": 3,
    "images": [
      "/__l5e/assets-v1/e88d1d1d-bcec-4dc4-9961-5c7e941f45b1/zz-49.jpg",
      "/__l5e/assets-v1/91e65708-2b9f-4ac1-bb2e-c8cfac637d5d/zz-50.jpg",
      "/__l5e/assets-v1/0a59502e-1714-4967-b38c-7b73e6be2b5e/zz-51.jpg"
    ],
    "sizes": [
      "34",
      "32",
      "31"
    ],
    "stockBySize": {
      "33": 1
    }
  },
  {
    "id": "vans-rosa-kids_645887cf4573b80008739e65",
    "title": "👟Vans Rosa Kids🌷",
    "description": "Kids Vans Negra con interior y línea rosa. Materiales y detalles originales. Del talle 31 al 34📌",
    "price": 32599,
    "category": "Vans Kids",
    "featured": false,
    "stock": 1,
    "images": [
      "/__l5e/assets-v1/df74b060-0122-47bc-8e7c-bb3f6bb6935f/zz-52.jpg",
      "/__l5e/assets-v1/8ba218bd-d528-4fc3-ab8e-59a2db2384db/zz-53.jpg",
      "/__l5e/assets-v1/7259ff6d-90ca-464a-ae1a-da814841c676/zz-54.jpg"
    ],
    "sizes": [
      "34",
      "33",
      "32",
      "31"
    ],
    "stockBySize": {
      "32": 1,
      "34": 1
    }
  },
  {
    "id": "vans-clasicas-plataforma_645c15c72b2a880008ca146e",
    "title": "👟Vans Clasicas Plataforma⚡️🔝",
    "description": "Vans Old Skool Clásica con Plataforma Alta.\nMateriales y detalles originales. ",
    "price": 42999,
    "category": "Vans Altas",
    "featured": true,
    "stock": 3,
    "images": [
      "/__l5e/assets-v1/d982c3c4-5c35-4d74-8a1b-9a26f88dbb86/zz-55.jpg",
      "/__l5e/assets-v1/4297fb3f-0a8c-4470-8618-ab839e28b859/zz-56.jpg",
      "/__l5e/assets-v1/71cad1b6-9f67-49eb-a6c2-e3f48c4bee07/zz-57.jpg",
      "/__l5e/assets-v1/eede7604-08ef-4201-b431-c1b2c902177b/zz-58.jpg"
    ],
    "sizes": [
      "39",
      "38",
      "37",
      "36",
      "35"
    ],
    "stockBySize": {
      "36": 2,
      "39": 1
    }
  },
  {
    "id": "vans-black_64b326cc7bfe6d0008f0d075",
    "title": "👟Vans Black ♣️",
    "description": "Old Skool Vans Negras. Materiales y detalles originales.",
    "price": 37599,
    "category": "Vans Bajas",
    "featured": false,
    "stock": 9,
    "images": [
      "/__l5e/assets-v1/69d2bfa8-beda-4ee2-9e3c-ff07b6fe67f2/zz-63.jpg",
      "/__l5e/assets-v1/216c6862-e2f4-4435-9fe1-656c4c9ef087/zz-64.jpg",
      "/__l5e/assets-v1/b567da45-5996-4f0b-8a29-5965ee0499c3/zz-65.jpg"
    ],
    "sizes": [
      "43",
      "42",
      "40",
      "37",
      "36"
    ],
    "stockBySize": {
      "37": 2,
      "38": 1,
      "40": 2,
      "42": 1,
      "43": 2
    }
  },
  {
    "id": "converse-botitas-oro-semicuero_6a4c6d6820ec36000460952f",
    "title": "🥾Converse Bota Oro Semicuero⚜️",
    "description": "Converse Chuck Taylor Semicuero. Blancas y detalles color Oro.",
    "price": 48599,
    "category": "All Star Botitas",
    "featured": true,
    "stock": null,
    "images": [
      "/__l5e/assets-v1/c27c59f8-3df5-4e44-aa77-49fddaf71554/zz-69.jpg",
      "/__l5e/assets-v1/816ea3a2-6695-45fe-83d3-ca9bbb1addfc/converse-oro-1.jpg",
      "/__l5e/assets-v1/5cc238bd-fcb8-4211-81e9-1d3cd95edbe1/converse-oro-2.jpg"
    ],
    "sizes": [
      "38",
      "39"
    ],
    "stockBySize": {
      "38": 1
    }
  }
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

/** Pares disponibles para un talle dado (0 = sin stock). */
export function availableStock(product: Product, size: string | null) {
  if (!size) return 0;
  return product.stockBySize[size] ?? 0;
}

/** Pares físicos totales en stock de un modelo. */
export function totalStock(product: Product) {
  return Object.values(product.stockBySize).reduce((a, b) => a + b, 0);
}
