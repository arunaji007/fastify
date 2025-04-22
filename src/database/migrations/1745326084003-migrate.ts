import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1745326084003 implements MigrationInterface {
    name = 'Migrate1745326084003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "firstName" character varying(50) NOT NULL,
                "lastName" character varying(50) NOT NULL,
                "email" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
