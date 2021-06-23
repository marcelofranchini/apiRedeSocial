import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

class CreateTagService{
    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepositories)

        if (!name) throw new Error('nome incorreto');

        const tagExist = await tagRepository.findOne({ name });
        
        if (tagExist) throw new Error('tag já existe');

        const tag = tagRepository.create({name});
        
        await tagRepository.save(tag);

        return tag;
        
    }
}

export { CreateTagService };