-- Ensure existing rows have values to satisfy NOT NULL constraints
UPDATE "User" SET "telephone" = COALESCE("telephone", 'N/A');
UPDATE "User" SET "document" = COALESCE("document", 'N/A');
UPDATE "User" SET "pix" = COALESCE("pix", 'N/A');

-- AlterTable
ALTER TABLE "User"
  ALTER COLUMN "telephone" SET NOT NULL,
  ALTER COLUMN "document" SET NOT NULL,
  ALTER COLUMN "pix" SET NOT NULL;
