import { v4 as uuidv4 } from "uuid";

export const laptopList = [
  {
    id: uuidv4(),
    seller: "brain",
    brand: "ASUS",
    title: "ASUS ZenBook Pro 15",
    description:
      "Потужний та стильний ноутбук ASUS з професійними можливостями для творчості та бізнесу.",
    imgSrc: "https://img.moyo.ua/img/gallery/5264/84/1639298_tn.jpg?1685522314",
    link: "https://rozetka.com.ua/ua/asus-90nr0e88-m004h0/p386766864/?xnpe_tifc=OfnDx.Vd4IEshIod4kHZb9pZhfEWVjQsVuU_O.YD4.bpxFo74jX8hFE.4kxZhFVdxIhu4ueL&utm_source=dm&utm_campaign=goodspromo&utm_medium=email&xnpe_cmp=.eJwTUqgR-LfxDuexFM741z-nNP-se3gzVHky5yuvrCgec94j99YYXr8519PY56ZjVAOjvn5SfkqlfkliUk6qfkmRfkmKfnJqXklqEYoQjB1tGIvMRZEyR5PKQGZHG8WiG1JckJinn5jFE8WsUujpeSZtqsOhgwBfmUjy.qdmatQgmmIGl4g",
    price: 51999,
  },
  {
    id: uuidv4(),
    brand: "ASUS",
    seller: "brain",
    title: "ASUS VivoBook 14",
    description:
      "Легкий та компактний ноутбук ASUS для повсякденних завдань і розваг.",
    imgSrc: "https://img.moyo.ua/img/gallery/5264/84/1639298_tn.jpg?1685522314",
    link: "https://www.moyo.ua/ua/noutbuk_acer_aspire_5_a515-56g_nx_at2eu_00u_/526484.html",
    price: 51999,
  },
  {
    id: uuidv4(),
    brand: "HP",
    title: "HP Pavilion x360",
    seller: "eldorado",
    description:
      "Універсальний ноутбук HP з можливістю перетворення в планшет та сенсорним екраном.",
    imgSrc: "https://img.moyo.ua/img/gallery/5264/86/1580429_tn.jpg?1680698375",
    link: "https://www.moyo.ua/ua/noutbuk_acer_aspire_7_a715-42g_nh_qbfeu_008_/526486.html",
    price: 44999,
  },
  {
    id: uuidv4(),
    brand: "Dell",
    seller: "eldorado",
    title: "Dell XPS 15",
    description:
      "Високопродуктивний ноутбук Dell із широким кольоровим дисплеєм та найновішими технологіями.",
    imgSrc: "https://img.moyo.ua/img/gallery/5434/38/1642163_tn.jpg?1685706507",
    link: "https://www.moyo.ua/ua/noutbuk_hp_omen_16-n0005ua_7x8e5ea_/543438.html",
    price: 56999,
  },
  {
    id: uuidv4(),
    brand: "Lenovo",
    seller: "eldorado",
    title: "Lenovo ThinkPad X1 Carbon",
    description:
      "Надійний і швидкий ноутбук Lenovo для бізнесу та професіоналів.",
    imgSrc: "https://img.moyo.ua/img/gallery/5021/77/1269010_tn.jpg?1634732295",
    link: "https://www.moyo.ua/ua/noutbuk_apple_macbook_pro_16_m1_pro_1tb_2021_mk193ua_a_space_grey_mk193/502177.html",
    price: 47999,
  },
  {
    id: uuidv4(),
    seller: "eldorado",
    brand: "Acer",
    title: "Acer Predator Helios 300",
    description:
      "Геймерський ноутбук Acer із потужною графікою та швидким процесором.",
    imgSrc: "https://img.moyo.ua/img/gallery/5152/9/1578125_tn.jpg?1680674167",
    link: "https://www.moyo.ua/ua/noutbuk_apple_macbook_pro_14_m1_max_64_8tb_custom_new_z15j000du_silver/515209.html",
    price: 39999,
  },
  {
    id: uuidv4(),
    seller: "rozetka",
    brand: "Apple",
    title: "Apple MacBook Pro 14",
    description:
      "Новий MacBook Pro із потужним процесором M1 Max та екраном Retina.",
    imgSrc: "https://img.moyo.ua/img/gallery/5152/8/1578117_tn.jpg?1680674090",
    link: "https://www.moyo.ua/ua/noutbuk_apple_macbook_pro_14_m1_max_64_8tb_custom_new_z15g000dw_space_gray/515208.html",
    price: 71999,
  },
  {
    id: uuidv4(),
    seller: "comfy",
    brand: "Sony",
    title: "Sony VAIO",
    description:
      "Елегантний та стильний ноутбук Sony із якісним звуком та дизайном.",
    imgSrc: "https://img.moyo.ua/img/gallery/5141/61/1577992_tn.jpg?1680672767",
    link: "https://www.moyo.ua/ua/noutbuk_acer_predator_helios_300_ph315-55_15_6fhd_ips_165hz_intel_i7-12700h_16_1024f_nvd3070ti-8_lin/523118.html",
    price: 59999,
  },
  {
    id: uuidv4(),
    brand: "Toshiba",
    title: "Toshiba Satellite",
    seller: "eldorado",
    description:
      "Надійний ноутбук Toshiba із зручною клавіатурою та низькою ціною.",
    imgSrc: "https://img.moyo.ua/img/gallery/5261/21/1433869_tn.jpg?1664978143",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 42999,
  },
  {
    id: uuidv4(),
    seller: "comfy",
    brand: "Samsung",
    title: "Samsung Galaxy Book Pro",
    description:
      "Легкий і потужний ноутбук Samsung із яскравим дисплеєм та довгою роботою від акумулятора.",
    imgSrc: "https://img.moyo.ua/img/gallery/5261/21/1433869_tn.jpg?1664978143",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 63999,
  },
  {
    id: uuidv4(),
    seller: "rozetka",
    brand: "Microsoft",
    title: "Microsoft Surface Laptop 4",
    description:
      "Стильний ноутбук від Microsoft із високоякісним дисплеєм та продуктивністю.",
    imgSrc: "https://img.moyo.ua/img/gallery/5282/62/1574202_tn.jpg?1680187276",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 54999,
  },
  {
    id: uuidv4(),
    brand: "LG",
    seller: "rozetka",
    title: "LG Gram",
    description:
      "Легкий та мобільний ноутбук від LG із тривалим часом автономної роботи.",
    imgSrc:
      "https://img.moyo.ua/img/gallery/5286/41/1582193_tn.jpeg?1680791209",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 48999,
  },
  {
    id: uuidv4(),
    brand: "Razer",
    seller: "comfy",
    title: "Razer Blade 15",
    description:
      "Потужний геймерський ноутбук Razer з високою частотою оновлення екрану та швидким процесором.",
    imgSrc: "https://img.moyo.ua/img/gallery/5282/62/1574202_tn.jpg?1680187276",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 69999,
  },
  {
    id: uuidv4(),
    brand: "MSI",
    title: "MSI GS66 Stealth",

    description:
      "Геймерський ноутбук від MSI із подвійною системою охолодження та високою продуктивністю.",
    imgSrc: "https://img.moyo.ua/img/gallery/5261/21/1433869_tn.jpg?1664978143",
    link: "https://example.com/msi-laptop",
    price: 66999,
    seller: "comfy",
  },
  {
    id: uuidv4(),
    brand: "Sony",
    title: "Sony VAIO Pro",
    description:
      "Легкий та стильний ноутбук Sony із високоякісним дисплеєм та надзвичайним звуком.",
    imgSrc: "https://img.moyo.ua/img/gallery/5261/21/1433869_tn.jpg?1664978143",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 59999,
    seller: "comfy",
  },
  {
    id: uuidv4(),
    brand: "Xiaomi",
    title: "Xiaomi Mi Notebook",
    seller: "eldorado",
    description:
      "Бюджетний ноутбук від Xiaomi із непоганими технічними характеристиками та привабливим дизайном.",
    imgSrc: "https://img.moyo.ua/img/gallery/5281/92/1581079_tn.jpg?1680704562",
    link: "https://www.moyo.ua/ua/noutbuk_dream_machines_rg3050ti-17_17_3fhd_ips_144hz_intel_i7-12700h_16_1024f_nvd3050ti-4_dos/530478.html",
    price: 37999,
  },
];
