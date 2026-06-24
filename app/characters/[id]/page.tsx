import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/SectionHeading';
import { characters } from '@/data/characters';
import { CharacterDetails } from '@/components/CharacterDetails';

interface CharacterPageProps {
  params: { id: string };
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = characters.find((item) => item.id === params.id);

  if (!character) {
    notFound();
  }

  return (
    <section className="space-y-10">
      <SectionHeading title={character.name} description={character.description} />
      <CharacterDetails character={character} />
    </section>
  );
}
