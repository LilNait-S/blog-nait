-- AddForeignKey
ALTER TABLE "publication" ADD CONSTRAINT "publication_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
