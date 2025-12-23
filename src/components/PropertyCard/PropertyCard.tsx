import { Link } from "react-router";
import { FC } from "react";
import {
  BiBath,
  BiBed,
  BiCheckCircle,
  BiMapPin,
  BiSquare,
} from "react-icons/bi";

import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";

export type Property = {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  verified: boolean;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  agent: string;
  agentPhone: string;
  featured: boolean;
};

export interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {property.verified && (
            <Badge className="absolute flex rounded-md gap-2 items-center px-2 top-3 right-3 bg-green-500 text-white border-none">
              <BiCheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
          <div className="absolute bottom-3 left-3">
            <div className="text-2xl font-bold text-white drop-shadow-lg">
              ${property.price.toLocaleString()}
              <span className="text-sm font-normal">/mo</span>
            </div>
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-3">
            <BiMapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <BiBed className="w-4 h-4" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <BiBath className="w-4 h-4" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-1">
              <BiSquare className="w-4 h-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <Badge variant="secondary" className="text-xs">
              {property.type}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
