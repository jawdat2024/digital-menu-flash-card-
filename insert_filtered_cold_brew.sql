-- Database Insertion Script for Cartel Digital Menu (PostgreSQL / MySQL compatible)
-- Category: "FILTERED & cold brew"
-- Branch Constraint: Mapped EXACTLY AND ONLY to the "Dubai" branch

-- 1. Ensure the category exists for the Dubai branch
INSERT INTO menu_categories (id, title, branch_id)
VALUES ('filtered-cold-brew', 'FILTERED & cold brew', 'dubai')
ON CONFLICT (id) DO NOTHING;

-- 2. Insert the 11 items with exact images, numeric prices, and handled empty notes (as NULL)
INSERT INTO menu_items (id, name, tasting_notes, price, image, category_id, branch, status, ingredients, calories)
VALUES
  (
    'dubai_fil_ethiopia', 
    'Ethiopia', 
    'Apricot, Pear, Honey.', 
    36.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_sweet_dream_decaf', 
    'Sweet dream Decaf', 
    'Passion fruit cheesecake, milk chocolate, molasses', 
    36.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_kirimara', 
    'KIRIMARA', 
    'Brown Sugar, Wild Cherry, Raisins.', 
    46.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_mish_mish', 
    'Mish Mish', 
    'Apricot Jam, Raspberry, Lychee.', 
    57.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_gesha', 
    'Gesha', 
    'Orange blossom, lemon grass, condensed milk', 
    65.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_colombia_strawberry_v60', 
    'Colombia strawberry v60', 
    'Strawberry jam – honey - milk chocolates', 
    57.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_fil_bourbon_sidra_v60', 
    'Bourbon sidra v60', 
    'Red grips – watermelon – hard candy- raspberry', 
    46.00, 
    'https://iili.io/qLf9mXt.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Filtered Coffee',
    5
  ),
  (
    'dubai_cb_cinnamon', 
    'Cold Brew - cinnamon', 
    NULL, -- Empty notes handled as NULL
    38.00, 
    'https://iili.io/C27AgUB.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Cold Brew Coffee',
    5
  ),
  (
    'dubai_cb_ethiopia', 
    'Cold Brew Ethiopia.', 
    'Apricot, Pear, Honey', 
    38.00, 
    'https://iili.io/B3OHMFV.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Cold Brew Coffee',
    5
  ),
  (
    'dubai_cb_kirimara', 
    'Cold Brew Kenya Kirimara', 
    'Brown Sugar, Wild Cherry, Raisins.', 
    38.00, 
    'https://iili.io/B3Ns6UG.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Cold Brew Coffee',
    5
  ),
  (
    'dubai_cb_colombian_exotic', 
    'Cold Brew - Colombian EXOTIC', 
    NULL, -- Empty notes handled as NULL
    38.00, 
    'https://iili.io/C27AgUB.jpg', 
    'filtered-cold-brew', 
    'Dubai', 
    'available', 
    'Cold Brew Coffee',
    5
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  tasting_notes = EXCLUDED.tasting_notes,
  price = EXCLUDED.price,
  image = EXCLUDED.image,
  category_id = EXCLUDED.category_id,
  branch = EXCLUDED.branch,
  status = EXCLUDED.status,
  ingredients = EXCLUDED.ingredients,
  calories = EXCLUDED.calories;
