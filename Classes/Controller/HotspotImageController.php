<?php

declare(strict_types=1);

namespace DMF\HotspotReact\Controller;

use TYPO3\CMS\Extbase\Mvc\Controller\ActionController;

class HotspotImageController extends ActionController
{
    public function viewAction()
    {
        $this->view->assign('msg', 'hello world');
    }
}
