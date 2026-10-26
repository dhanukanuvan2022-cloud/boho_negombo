const WHATSAPP_NUMBER = "94763785873";
const menuItems = [
  {id:"turkish-eggs",name:"Turkish Eggs",price:1700,category:"brunch",desc:"Poached eggs over garlicky yoghurt with warm spiced butter and sourdough."},
  {id:"boho-toast",name:"Boho Toast",price:2000,category:"brunch",desc:"Sautéed mushrooms, hummus and homemade pesto on sourdough."},
  {id:"avo-toast",name:"Eggs on Avo Toast",price:2000,category:"brunch",desc:"Eggs and avocado on a thick slice of sourdough."},
  {id:"chicken-waffles",name:"Chicken & Waffles",price:2000,category:"brunch",desc:"Waffle served with fried chicken."},
  {id:"milano-breakfast",name:"The Milano Breakfast",price:2200,category:"brunch",desc:"Brioche, cappuccino and a glass of fresh orange juice."},
  {id:"sri-lankan-omelette",name:"Sri Lankan Omelette",price:2200,category:"brunch",desc:"Three-egg omelette with onion, green chilli, capsicum, tomato and curry leaves."},
  {id:"boho-breakkie",name:"Boho Breakkie",price:2700,category:"brunch",desc:"Eggs, chicken sausages, bacon, hash brown, beans, tomato, toast and mushrooms."},
  {id:"salmon-bagel",name:"Smoked Salmon & Avocado Bagel",price:3100,category:"brunch",desc:"Cream cheese, avocado, capers and poached eggs."},
  {id:"garlic-bread",name:"Garlic Bread",price:800,category:"starters",desc:"Garlic bread to share."},
  {id:"chips",name:"Chips",price:1000,category:"starters",desc:"Fresh hand-cut chips."},
  {id:"cheesy-garlic-bread",name:"Cheesy Garlic Bread",price:1200,category:"starters",desc:"Garlic bread topped with cheese."},
  {id:"tofu-taco",name:"Tofu Taco",price:1600,category:"starters",desc:"Crispy salt-and-pepper tofu, spicy crema and pico de gallo."},
  {id:"crispy-mushy-taco",name:"Crispy Mushy Taco",price:1600,category:"starters",desc:"Crispy oyster mushrooms, guacamole and sriracha."},
  {id:"bang-bang-shrimp",name:"Bang Bang Shrimp",price:1800,category:"starters",desc:"Crispy shrimp with mayo-sriracha, guacamole and pico de gallo."},
  {id:"crispy-fish-taco",name:"Crispy Fish Taco",price:1900,category:"starters",desc:"Battered fish taco with guacamole, pico de gallo and red sauce."},
  {id:"bbq-beef-taco",name:"BBQ Pulled Beef Taco",price:2000,category:"starters",desc:"Shredded beef, guacamole, pico de gallo and red sauce."},
  {id:"falafel-bowl",name:"Falafel Bowl",price:2000,category:"mains",desc:"Hummus, hand-cut chips, crispy pita, garlic rice and salad."},
  {id:"chicken-snitty",name:"Chicken Snitty",price:2400,category:"mains",desc:"Chicken schnitzel with chips, seasonal salad and mushroom gravy."},
  {id:"butter-chicken",name:"Butter Chicken",price:2300,category:"mains",desc:"Creamy butter chicken served with garlic rice and naan."},
  {id:"shawarma-bowl",name:"Moroccan Chicken Shawarma Bowl",price:2300,category:"mains",desc:"Chicken, hummus, chips, crispy pita, garlic rice and salad."},
  {id:"bangers-mash",name:"Bangers & Mash",price:2500,category:"mains",desc:"Italian-spiced pork sausages, onion gravy, creamy mash and garlic bread."},
  {id:"steak-au-poivre",name:"Steak Au Poivre",price:2900,category:"mains",desc:"Creamy beef pepper steak served with chips."},
  {id:"pork-chop-milanese",name:"Pork Chop Milanese",price:2900,category:"mains",desc:"Crispy pork chop, creamy mash, salad and sauces."},
  {id:"fish-chips",name:"Fish & Chips",price:2200,category:"seafood",desc:"Crispy battered fish with fresh hand-cut chips."},
  {id:"barramundi-piccata",name:"Barramundi Piccata",price:2400,category:"seafood",desc:"Crispy skin-on barramundi, piccata sauce, smashed potatoes and vegetables."},
  {id:"fish-fingers",name:"Lemon Herb Fish Fingers",price:2400,category:"seafood",desc:"Fish fingers with hand-cut chips and salad."},
  {id:"tuna-steak",name:"Pan-Seared Tuna Steak",price:2800,category:"seafood",desc:"Tuna in creamy citrus-lemon sauce with mash and salad."},
  {id:"whole-red-mullet",name:"Whole Red Mullet",price:3500,category:"seafood",desc:"Choice of cooking style, served with vegetable rice."},
  {id:"jumbo-prawns",name:"Garlic Jumbo Prawns",price:4000,category:"seafood",desc:"Jumbo prawns in garlic butter with seasonal salad and chips."},
  {id:"seafood-platter",name:"BOHO Seafood Platter",price:9000,category:"seafood",desc:"Market-fresh seafood selection with garlic bread and chips."},
  {id:"sunshine-bowl",name:"Sunshine Bowl",price:1700,category:"bowls",desc:"Frozen banana, papaya, pineapple, mango and passionfruit."},
  {id:"berry-bowl",name:"I Love You Berry Much Bowl",price:1700,category:"bowls",desc:"Frozen banana and mixed berries."},
  {id:"chocolate-bowl",name:"Chocolate Peanut Butter Bowl",price:1700,category:"bowls",desc:"Frozen banana, dark chocolate sauce and peanut butter."},
  {id:"ninja-bowl",name:"The Ninja Turtle Bowl",price:1700,category:"bowls",desc:"Frozen banana, avocado and honey."},
  {id:"espresso",name:"Espresso",price:500,category:"drinks",desc:"Hot coffee."},
  {id:"americano",name:"Americano",price:600,category:"drinks",desc:"Classic black coffee."},
  {id:"cappuccino",name:"Cappuccino",price:700,category:"drinks",desc:"Espresso with steamed milk foam."},
  {id:"latte",name:"Latte",price:850,category:"drinks",desc:"Espresso and steamed milk."},
  {id:"hot-chocolate",name:"Hot Chocolate",price:800,category:"drinks",desc:"Rich hot chocolate."},
  {id:"iced-coffee",name:"Iced Coffee",price:800,category:"drinks",desc:"Chilled coffee."},
  {id:"iced-matcha",name:"Iced Matcha",price:900,category:"drinks",desc:"Chilled matcha drink."},
  {id:"mango-shake",name:"Mango Lassi",price:800,category:"drinks",desc:"Refreshing mango yoghurt drink."},
  {id:"fresh-lime",name:"Fresh Lime",price:700,category:"drinks",desc:"Fresh lime juice."},
  {id:"mixed-juice",name:"Mixed Fruit Juice",price:1200,category:"drinks",desc:"Fresh mixed fruit juice."},
  {id:"egg-kottu",name:"Egg Kottu",price:null,category:"srilankan",desc:"Sri Lankan menu item. Please ask BOHO to confirm today's price."}
];
const categoryNames = {brunch:"Breakfast & Brunch",starters:"Starters & Tacos",mains:"Main Courses",seafood:"Seafood",bowls:"Smoothie Bowls",drinks:"Drinks",srilankan:"Sri Lankan"};
const cart = new Map();
const money = value => value == null ? "Ask for price" : "Rs. " + value.toLocaleString("en-LK");
const grid = document.getElementById("menuGrid");
const cartItems = document.getElementById("cartItems");
function renderMenu(category="all"){
  grid.innerHTML="";
  const list=menuItems.filter(item=>category==="all"||item.category===category);
  list.forEach(item=>{
    const card=document.createElement("article");
    card.className="menu-card";
    card.innerHTML=`<div class="menu-card-top"><h3>${item.name}</h3><span class="price">${money(item.price)}</span></div><p class="menu-desc">${item.desc}</p><div class="menu-card-bottom"><span class="category-label">${categoryNames[item.category]}</span><button class="add-button" type="button" data-add="${item.id}">+ Add</button></div>`;
    grid.appendChild(card);
  });
}
function renderCart(){
  const entries=[...cart.entries()];
  document.getElementById("cartCount").textContent=entries.reduce((n,[,qty])=>n+qty,0);
  const total=entries.reduce((sum,[id,qty])=>{const item=menuItems.find(i=>i.id===id);return sum+(item.price||0)*qty},0);
  document.getElementById("cartTotal").textContent=money(total);
  if(!entries.length){cartItems.innerHTML='<p class="empty-cart">Your basket is waiting for something delicious.</p>';return}
  cartItems.innerHTML="";
  entries.forEach(([id,qty])=>{
    const item=menuItems.find(i=>i.id===id);
    const row=document.createElement("div");row.className="cart-row";
    row.innerHTML=`<div><div class="cart-row-name">${item.name}</div><div class="qty-controls"><button type="button" data-minus="${id}" aria-label="Remove one ${item.name}">−</button><span>${qty}</span><button type="button" data-plus="${id}" aria-label="Add one ${item.name}">+</button></div></div><div class="cart-row-price">${item.price==null?"Price to confirm":money(item.price*qty)}</div>`;
    cartItems.appendChild(row);
  });
}
grid.addEventListener("click",e=>{const btn=e.target.closest("[data-add]");if(!btn)return;const id=btn.dataset.add;cart.set(id,(cart.get(id)||0)+1);renderCart();btn.textContent="✓ Added";setTimeout(()=>{btn.textContent="+ Add"},900)});
cartItems.addEventListener("click",e=>{const plus=e.target.closest("[data-plus]"),minus=e.target.closest("[data-minus]");if(plus){const id=plus.dataset.plus;cart.set(id,(cart.get(id)||0)+1)}if(minus){const id=minus.dataset.minus;const next=(cart.get(id)||0)-1;if(next<=0)cart.delete(id);else cart.set(id,next)}renderCart()});
document.getElementById("clearCart").addEventListener("click",()=>{cart.clear();renderCart()});
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));btn.classList.add("active");renderMenu(btn.dataset.category)}));
document.getElementById("orderForm").addEventListener("submit",e=>{
  e.preventDefault();
  if(!cart.size){alert("Please add at least one menu item to your order.");document.getElementById("menu").scrollIntoView({behavior:"smooth"});return}
  const name=document.getElementById("customerName").value.trim();
  const phone=document.getElementById("customerPhone").value.trim();
  const type=document.getElementById("orderType").value;
  const notes=document.getElementById("orderNotes").value.trim();
  const lines=[...cart.entries()].map(([id,qty])=>{const item=menuItems.find(i=>i.id===id);return `• ${item.name} x ${qty} — ${item.price==null?"price to confirm":money(item.price*qty)}`});
  const total=[...cart.entries()].reduce((sum,[id,qty])=>sum+((menuItems.find(i=>i.id===id).price||0)*qty),0);
  const textMessage=`Hello BOHO Negombo! I'd like to enquire about this order:\n\n${lines.join("\n")}\n\nEstimated subtotal: ${money(total)}\nOrder type: ${type}\nCustomer name: ${name}\nContact number: ${phone}${notes?`\nSpecial requests: ${notes}`:""}\n\nPlease confirm availability, final prices, and any delivery charges. Thank you!`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`,"_blank","noopener");
});
const gallery=document.getElementById("galleryGrid");
const photoFiles = ["boho-photo-01.jpg","boho-photo-02.jpg","boho-photo-03.jpg","boho-photo-04.jpg","boho-photo-05.jpg","boho-photo-06.jpg","boho-photo-07.jpg","boho-photo-08.jpg","boho-photo-09.jpg","boho-photo-10.jpg","boho-photo-11.jpg","boho-photo-12.jpg","boho-photo-13.jpg"];
const labels=["A BOHO welcome","An evening atmosphere","Fresh from the kitchen","Good food, good company","Plates made to share","A relaxed café moment","Colourful favourites","Coffee break","Freshly prepared","A BOHO detail","Dessert time","Made with care","Visit BOHO"];
photoFiles.forEach((src,i)=>{const figure=document.createElement("figure");figure.className="gallery-item";const img=document.createElement("img");img.src="assets/"+src;img.alt=labels[i%labels.length];img.loading=i<3?"eager":"lazy";img.decoding="async";figure.appendChild(img);const cap=document.createElement("figcaption");cap.className="gallery-label";cap.textContent=labels[i%labels.length];figure.appendChild(cap);gallery.appendChild(figure)});
document.getElementById("year").textContent=new Date().getFullYear();
const toggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}));
renderMenu();renderCart();