/*
  Warnings:

  - Added the required column `contact` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `local` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `veicules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `veicules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `km` to the `veicules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `march` to the `veicules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `veicules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `veicules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "local" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "veicules" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "km" TEXT NOT NULL,
ADD COLUMN     "march" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "year" TEXT NOT NULL;
