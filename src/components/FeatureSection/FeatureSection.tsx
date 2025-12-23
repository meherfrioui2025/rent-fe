import { FC } from "react";

import { Card, CardContent, CardHeader } from "../ui/Card";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

const FeatureSection: FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
}) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>
              </CardHeader>

              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeatureSection;
