// import { cn } from "@/lib/utils";
// import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "../ui/input-group";
// import { ArrowRight, Loader2 } from "lucide-react";

// interface AIPromptInputProps {
//     promptText: string;
//     setPromptText: (promptText: string) => void;
//     isLoading: boolean;
//     className?: string;
//     onSubmit: () => void;
//     hideSubmitButton?: boolean;
// }

// export default function AIPromptInput({ promptText, setPromptText, isLoading, onSubmit, className, hideSubmitButton = false }: AIPromptInputProps) {
//     return (
//         <div className="bg-background">
//             <InputGroup className={cn("min-h-[120px] md:min-h-[160px] rounded-3xl", className && className)}>
//                 <InputGroupTextarea
//                     className="text-base placeholder:text-muted-foreground/70 placeholder:text-center md:placeholder:text-left placeholder:text-sm md:placeholder:text-base p-4 pt-6 resize-none focus:outline-none focus:ring-0"
//                     placeholder="Describe your mobile app idea (e.g., 'A fitness tracker for competitive swimmers with social features')..."
//                     value={promptText}
//                     onChange={(e) => setPromptText(e.target.value)}
//                     style={{ minHeight: '120px' }}
//                 >
//                     <InputGroupAddon align='block-end' className="flex items-center justify-end p-2">
//                         {!hideSubmitButton && (
//                             <InputGroupButton
//                                 variant='default'
//                                 className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
//                                 size='sm'
//                                 disabled={!promptText.trim() || isLoading}
//                                 onClick={onSubmit}>
//                                 {isLoading ? <Loader2 className="size-4 animate-spin" /> : (<>
//                                     Design <ArrowRight className="size-4" />  </>)}
//                             </InputGroupButton>
//                         )}
//                     </InputGroupAddon>
//                 </InputGroupTextarea>
//             </InputGroup>
//         </div>
//     );
// }

"use client";

import {
    PromptInput,
    PromptInputBody,
    PromptInputButton,
    PromptInputFooter,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { cn } from "@/lib/utils";
import { GlobeIcon, MicIcon, PaperclipIcon } from "lucide-react";


interface AIPromptInputProps {
    promptText: string;
    setPromptText: (promptText: string) => void;
    isLoading: boolean;
    className?: string;
    onSubmit: () => void;
    hideSubmitButton?: boolean;
}

export default function AIPromptInput({ promptText, setPromptText, isLoading, onSubmit, className, hideSubmitButton = false }: AIPromptInputProps) {
    // const [promptText, setPromptText] = useState<string>("");
    return (
        <PromptInput onSubmit={() => onSubmit()}>
            <PromptInputBody>
                <PromptInputTextarea className={cn("min-h-[80px] md:min-h-[120px] rounded-3xl", className)} value={promptText} onChange={(e) => setPromptText(e.target.value)} />
            </PromptInputBody>
            <PromptInputFooter>
                <PromptInputTools>
                    <PromptInputButton tooltip={{ content: "Attach files", shortcut: "⌘F" }}>
                        <PaperclipIcon size={16} />
                    </PromptInputButton>
                    <PromptInputButton
                        tooltip={{ content: "Search the web", shortcut: "⌘K" }}
                    >
                        <GlobeIcon size={16} />
                    </PromptInputButton>
                    <PromptInputButton
                        tooltip={{ content: "Voice input", shortcut: "⌘M" }}
                    >
                        <MicIcon size={16} />
                    </PromptInputButton>
                </PromptInputTools>
                {!hideSubmitButton && (
                    <PromptInputSubmit disabled={isLoading} />
                )}
            </PromptInputFooter>
        </PromptInput>
    );
}
