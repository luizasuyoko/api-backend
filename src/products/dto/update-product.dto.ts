import { IsString, IsNumber, Min, IsOptional } from "class-validator";

export class updateProductDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @Min(0) //preço não poder ser negativo
    @IsOptional()
    price?: number;
}