import React from "react";
interface CompanionCardType {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardType) => {
  return <div>CompanionCard</div>;
};

export default CompanionCard;
