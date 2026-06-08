CREATE TABLE IF NOT EXISTS lesson_descriptions (
  id SERIAL PRIMARY KEY,
  lesson_id INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  topic VARCHAR(255) NOT NULL,
  section_title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS tech_stack_descriptions (
  id SERIAL PRIMARY KEY,
  tech_stack_id INTEGER NOT NULL REFERENCES tech_stack(id) ON DELETE CASCADE,
  topic VARCHAR(255) NOT NULL,
  section_title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS library_descriptions (
  id SERIAL PRIMARY KEY,
  library_id INTEGER NOT NULL REFERENCES libraries(id) ON DELETE CASCADE,
  topic VARCHAR(255) NOT NULL,
  section_title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS paas_item_descriptions (
  id SERIAL PRIMARY KEY,
  paas_item_id INTEGER NOT NULL REFERENCES paas_items(id) ON DELETE CASCADE,
  topic VARCHAR(255) NOT NULL,
  section_title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  sort_order INTEGER DEFAULT 1
);