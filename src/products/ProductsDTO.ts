import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductsDTO {
  @IsNumber()
  @IsOptional()
  code?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  imported_t?: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  creator?: string;

  @IsNumber()
  @IsOptional()
  created_t?: number;

  @IsNumber()
  @IsOptional()
  last_modified_t?: number;

  @IsString()
  @IsOptional()
  product_name?: string;

  @IsString()
  @IsOptional()
  quantity?: string;

  @IsString()
  @IsOptional()
  brands?: string;

  @IsString()
  @IsOptional()
  categories?: string;

  @IsString()
  @IsOptional()
  labels?: string;

  @IsString()
  @IsOptional()
  cities?: string;

  @IsString()
  @IsOptional()
  purchase_places?: string;

  @IsString()
  @IsOptional()
  stores?: string;

  @IsString()
  @IsOptional()
  ingredients_text?: string;

  @IsString()
  @IsOptional()
  traces?: string;

  @IsString()
  @IsOptional()
  serving_size?: string;

  @IsNumber()
  @IsOptional()
  serving_quantity?: number;

  @IsNumber()
  @IsOptional()
  nutriscore_score?: number;

  @IsString()
  @IsOptional()
  nutriscore_grade?: string;

  @IsString()
  @IsOptional()
  main_category?: string;

  @IsString()
  @IsOptional()
  image_url?: string;
}
